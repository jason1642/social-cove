import * as React from 'react';
import { useState, useEffect } from 'react';
import { Text, View, Image, } from 'react-native'
import {makeStyles} from '@rneui/themed'
import { useTheme } from '@react-navigation/native'
import RNRestart from 'react-native-restart'
import { useForm, useController } from 'react-hook-form'
import InputController from '../components/inputs/ImageInput'
import { launchImageLibrary } from 'react-native-image-picker'
import { Button } from '@rneui/base';
import { createPost } from '../api-helpers/posts'


interface ICreatePostProps {
}

const CreatePost: React.FunctionComponent<ICreatePostProps> = (props) => {
  const [pickedImage, setPickedImage ] = useState(undefined)
  const { colors } = useTheme()
  const styles = useStyles(colors)
  const { control, handleSubmit, setValue, setError, formState: { errors } } = useForm({
    defaultValues: {
      image: {},
      content: '',
      title:''
    }
  })

  const handleChoosePhoto = async () => {
    await launchImageLibrary({ mediaType: 'photo', presentationStyle: 'formSheet' },
      (res:any) => {
        const { fileName, type, uri } = res.assets[0]
       
        setValue('image',
          {
          uri: uri,
          name: fileName,
          type: type
        })
    
        setPickedImage(res.assets[0].uri)
    })
  }

  const onSubmit = async (data:any) => {
    
    console.log(data.image)
    await createPost({
      image: data.image,
      title: 'random title',
      content: 'This is my first image upload ever',
      user_id: 1
    }).then(res => {
      console.log(res)
    }, err=>console.log(err))
  }
  const onError = async (err: any) => {
    console.log(err)
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create A Post</Text>
      <Text style={styles.title}>Create a post with this form</Text>

      <View style={styles.imageContainer}>
        {pickedImage && <Image
        style={styles.image}
        source={{uri: pickedImage}}
      />}
      </View>
      
      <InputController
        name='image'
        control={control}
        type='URL'
        inputStyle={styles.input}
        inputProps={{
          editable: false,
          placeholderTextColor: 'black',
        }}
      />
      <Button
        title='Choose Image'
        onPress={handleChoosePhoto}
      />

      <Button
        title='Submit'
        onPress={handleSubmit(onSubmit, onError)}
      />
    </View>
  );
};

export default CreatePost;

const useStyles = makeStyles((theme, props: any) => ({
  container: {
    padding: 15,
  },
  title: {
    color: props.text,
    fontSize: 24,
  },
  image: {
    height: 250,
    width: 300,
  },
  imageContainer: {
    // justifyContent: 'center',
    marginVertical: 15,
    alignItems: 'center',
  },
  input: {
    color: 'black',
    backgroundColor: 'white',
    borderColor: 'black',
    fontSize: 14,
    paddingVertical: 8,
    paddingHorizontal: 4,
    borderRadius: 4,
    marginVertical: 10,
  },
}))
