import * as React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native'
import {useForm } from "react-hook-form"
import { Button } from '@rneui/base';
import { RootState } from '../../redux/store'
import { useSelector, useDispatch } from 'react-redux';
import InputController from '../../components/inputs/InputController'
import {Avatar} from '@rneui/themed'
import { editUser } from '../../redux/actions/userActions'

interface IEditProfileProps {
  userData: any,
}

const editOptions = ['Username', 'Email', 'bio']
const EditProfile: React.FunctionComponent<IEditProfileProps> = ({ }) => {
  const user = useSelector((state: RootState) => state.user.data)
  const dispatch = useDispatch()
  const { control, handleSubmit, setError, formState: { errors } } = useForm({
    defaultValues: {
      username: user.username,
      bio: user.bio,
      email: user.email,
    }
  })
  const onSubmit =  async (data: any) => { 
    const response = dispatch(editUser(data))

  }
  return (
    <View style={styles.container}>


      {/* <Text style={styles.title}>EDIT PROFILE</Text> */}

      <Avatar
          size='large'
          rounded
          title={'T'}
          containerStyle={styles.profile_picture}
          iconStyle={{}}
        />
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
    backgroundColor: 'green',
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