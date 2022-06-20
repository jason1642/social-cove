import * as React from 'react';
import { useState } from 'react';
import { ScrollView, Text, View, Image, } from 'react-native'
import {makeStyles} from '@rneui/themed'
import { useTheme } from '@react-navigation/native'
// import RNRestart from 'react-native-restart'
import { useForm } from 'react-hook-form'
import ImageInputController from '../components/inputs/ImageInput'
import { launchImageLibrary } from 'react-native-image-picker'
import { createPost } from '../api-helpers/posts'
import InputController from '../components/inputs/InputController'
import CreatePostButtons from '../components/create-post/CreatePostButtons'
import { onSubmit, onError } from '../components/create-post/Methods'
import ImageContainer from '../components/create-post/ImageContainer';
import { RootState } from '../redux/store'
import { useSelector } from 'react-redux'

interface ICreatePostProps {
  route: any,
}

const CreatePost: React.FunctionComponent<ICreatePostProps> = ({ route }) => {
  const user = useSelector((state: RootState) => state.user)

  const [pickedImage, setPickedImage] = useState(undefined)

  const { colors } = useTheme()
  const styles = useStyles(colors)
  const { control, handleSubmit, setValue, setError, formState: { errors } } = useForm<any>({
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
        setPickedImage(uri)

        } else if (didCancel) {
          console.log(didCancel)
        } else if (errorMessage) {
          console.log(errorMessage)
        }
    })
  }
 
  return (
    <ScrollView style={styles.container}>

      <ImageContainer
        pickedImage={pickedImage}
      />
      
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
      {errors.image && <Text style={styles.errorText}>{errors.image.message}</Text>}
      <InputController
        label='Title'
        name='title'
        control={control}
        inputStyle={styles.input}
      />

      <InputController
        label='Content'
        name='content'
        control={control}
        inputStyle={styles.input}
        inputProps={{
          multiline: true,
          maxLength: 250,
        }}
      />

      <CreatePostButtons
        handleChoosePhoto={handleChoosePhoto}
        buttonFunction={handleSubmit(data=>onSubmit(data, user.data.id, setError), onError)}
      />
     

    </ScrollView>
  );
};

export default CreatePost;

const useStyles = makeStyles((theme, props: any) => ({
  container: {
    paddingHorizontal: 10,
    // marginVertical: 10,
  },
  title: {
    color: props.text,
    fontSize: 24,
    textAlign: 'center',
  },
  errorText: {
    color: 'orange',
  },
  input: {
    color: 'black',
    // backgroundColor: 'white',
    borderColor: props.border,
    borderWidth: 1,
    fontSize: 14,
    paddingVertical: 8,
    paddingHorizontal: 4,
    borderRadius: 4,
    marginVertical: 10,
  },
  icon: {
    color: 'white',
  }
}))
