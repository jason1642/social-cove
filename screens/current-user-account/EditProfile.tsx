import * as React from 'react';
import { useState, useEffect } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import {useForm } from "react-hook-form"
import { Button } from '@rneui/base';
import { RootState } from '../../redux/store'
import { useSelector, useDispatch } from 'react-redux';
import InputController from '../../components/inputs/InputController'
import {Avatar} from '@rneui/themed'
import { editUser } from '../../redux/actions/userActions'
import { launchImageLibrary } from 'react-native-image-picker'
import RNRestart from 'react-native-restart'; 
import { CommonActions } from '@react-navigation/native';

interface IEditProfileProps {
  userData: any,
  navigation: any,
}

const editOptions = ['Username', 'Email', 'bio']
const EditProfile: React.FunctionComponent<IEditProfileProps> = ({ navigation, }) => {
  const user = useSelector((state: RootState) => state.user.data)
  const [pickedImage, setPickedImage] = useState<any>(user.profile_picture_url)

  const dispatch = useDispatch()
  const { control, handleSubmit, setValue, setError, formState: { errors } } = useForm({
    defaultValues: {
      username: user.username,
      bio: user.bio,
      email: user.email,
      profile_picture: user.profile_picture
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
        setValue('profile_picture',
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

  const onSubmit =  async (data: any) => { 
    // Entire function is within the redux user action file
    dispatch(editUser({
      ...data,
      user_id: user.id,
      setError: setError,
    }))
    navigation.dispatch(CommonActions.reset({index: 1, routes: [{name: 'Main'}]}))

  }
  return (
    <View style={styles.container}>


      {/* <Text style={styles.title}>EDIT PROFILE</Text> */}
      <Pressable
        onPress={handleChoosePhoto}
      >
        <Avatar
          size='large'
          rounded
          title={'No image'}
          titleStyle={{fontSize: 14}}
          source={{uri: pickedImage}}
          containerStyle={styles.profile_picture}
          iconStyle={{}}
        />
      </Pressable>
      
      {
        editOptions.map(ele =>
          <InputController
            key={ele}
            label={ele}
            name={ele.toLowerCase()}
            control={control}
            inputStyle={styles.input}
          />)
      }

      {errors.username && <Text style={styles.errorText}>{errors.username.message}</Text>}
      
    <Button title='Submit' onPress={handleSubmit(onSubmit)} />
      {/* <Button title='refresh' onPress={()=> RNRestart.Restart()} />  */}
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    // backgroundColor: 'orange',
    padding: 15,
    // justifyContent: 'center',
    // alignContent: 'center',
  },
  title: {
    color: 'white'
  },
  profile_picture: { 
    alignSelf: 'center',
    backgroundColor: 'orange',
  },
  input: {
    width: "80%",
    color: 'white',
    backgroundColor: 'grey',
    borderColor: 'black',
    fontSize: 22,
    paddingVertical: 6,
    paddingHorizontal: 3,
    borderRadius: 3,
    marginVertical: 2,
    // alignSelf: 'center',
  },
  errorText: {
    color: 'orange'
  },
})