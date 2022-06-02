import * as React from 'react';
import { useState, useEffect } from 'react';
import { Text, View, Image, } from 'react-native'
import {makeStyles} from '@rneui/themed'
import { useTheme } from '@react-navigation/native'
import RNRestart from 'react-native-restart'
import { useForm, useController } from 'react-hook-form'
import ImageInputController from '../components/inputs/ImageInput'
import { launchImageLibrary } from 'react-native-image-picker'
import { createPost } from '../api-helpers/posts'
import InputController from '../components/inputs/InputController'
import Button from '../components/buttons/CreatePost'
import { Icon } from '@rneui/themed';


interface ICreatePostProps {
  route: any,
}

const CreatePost: React.FunctionComponent<ICreatePostProps> = ({ route }) => {
    const { user_id} = route.params

  const [pickedImage, setPickedImage] = useState(undefined)
  console.log(user_id)
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
      (res: any) => {
        const {didCancel, errorMessage, errorCode} = res
        // .didCancel, .error, .errorCode
        if (!didCancel && !errorMessage) {
           const { fileName, type, uri } = res.assets[0]
        console.log(res.assets[0])
        setValue('image',
          {
          uri: uri.replace('file://', ''),
          filename: fileName,
          content_type: type
        })
        setPickedImage(res.assets[0].uri)

        } else if (didCancel) {
          console.log(didCancel)
        } else if (errorMessage) {
          console.log(errorMessage)
        }
       
    })
  }

  const onSubmit = async (data: any) => {
    // console.log(data.image)
    const formData = new FormData()
    formData.append('image', {
      uri: data.image,
      name: data.image.filename,
      type: data.image.content_type
    })
    console.log(data.image)
    await createPost({
      image: {
        uri: data.image.uri,
        filename: data.image.filename,
        content_type: data.image.content_type
      },
      title: data.title,
      content: data.content,
      user_id: user_id
    }).then(res => {
      console.log(res)
    }, err=>console.log(err))
  }
  const onError = async (err: any) => {
    console.log(err)
  }
  return (
    <View style={styles.container}>

      <View style={styles.imageContainer}>
        {pickedImage && <Image
        style={styles.image}
        source={{uri: pickedImage}}
      />}
      </View>
      
      <ImageInputController
        name='image'
        control={control}
        type='URL'
        inputStyle={styles.input}
        inputProps={{
          editable: false,
          placeholderTextColor: 'black',
        }}
      />
      <InputController
        name='title'
        control={control}
        inputStyle={styles.input}
      />

      <InputController
        name='content'
        control={control}
        inputStyle={styles.input}
      />
      <View style={styles.buttonWrapper}>
         <Button
        title='Choose Image'
          buttonFunction={handleChoosePhoto}
          buttonProps={{
            icon: <Icon color='white' name='image' type='material-icons' />,
            iconPosition: 'right'
          }}
      />
      <Button
        title='Post'
        buttonFunction={handleSubmit(onSubmit, onError)}
      />
      </View>
     

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
    textAlign: 'center',
  },
  image: {
    height: '100%',
    width: '100%',
  },
  imageContainer: {
    // justifyContent: 'center',
    height: 250,
    // width: 300,
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
  buttonWrapper: {
    alignItems: 'center',
  },
  icon: {
    color: 'white',

  }
}))
