import { Text, View, TextInput } from 'react-native'
import * as React from 'react';
import { useState, useEffect } from 'react';
import { Button } from '@rneui/base'
import { makeStyles } from '@rneui/themed'
import {useTheme} from '@react-navigation/native'
import {useForm, Controller } from "react-hook-form"
import { loginUser } from '../api-helpers/users'
import { useDispatch } from 'react-redux'
// import userSlice from '../redux/features/userSlice'
import { loginUser as loginUserAction } from '../redux/features/userSlice'
import RNRestart from 'react-native-restart'; 
import InputController from '../components/inputs/InputController'
import LogInOutButton from '../components/buttons/LogInOut'

interface ILoginProps {
  navigation: any,
}


const Login: React.FunctionComponent<ILoginProps> = ({ navigation }) => {
  const { colors } = useTheme()
  const styles = useStyles(colors)
  const dispatch = useDispatch()
  const { control, handleSubmit, setError, formState: { errors } } = useForm({
    defaultValues: {
      username: '',
      password: ''
    }
  })
  
  useEffect(() => {
    navigation.setOptions({
      headerTitle: 'Login'
    })
  }, []);
  const onSubmit = async (data: any) => 
    await loginUser(data).then(res => {
      
        if (res.error) {
          res.error === 'Username not found' ?
          setError('username', { type: 'required', message: 'Username not found' }, { shouldFocus: true })
          :
          setError('password', { type: 'required', message: 'Incorrect Password' }, { shouldFocus: true })
        } else {
          console.log(res.data)
          dispatch(loginUserAction(res.data))
          RNRestart.Restart();
        }
      })
  
  const onError = (errors: any) => {
    if (errors.username) {
      setError('username', {type: 'required', message: 'Username is required'}, {shouldFocus: true})
    }
    if (errors.password) {
      setError('password', {type: 'required', message: 'Password is required'}, {shouldFocus: true})
    }
  }


  return (<View style={styles.container}>

    <InputController
      label='Username'
      name='username'
      control={control}
      inputStyle={styles.input}
      type='username'
    />
      {errors.username && <Text style={styles.errorText}>{errors.username.message}</Text>}
    
    <InputController
      label='Password'
      name='password'
      control={control} 
      inputStyle={styles.input} 
      type='password'
    />
      {errors.password && <Text style={styles.errorText}>{errors.password.message}</Text>}

    <LogInOutButton
      name='Submit'
      buttonFunction={handleSubmit(onSubmit, onError)}
        />

    <LogInOutButton
      name='Back'
      buttonFunction={() => navigation.goBack()}
    />


  </View>);
};

export default Login;


const useStyles = makeStyles((theme, props: any) => ({
  container: {
    flex: 3,
    padding: 24,
    alignItems: 'stretch',
    
  },
  button: {
    marginVertical: 10,
    justifySelf: 'flex-end',
  },
  title: {
    color: props.text
  },
  input: {
    color: props.text,
    backgroundColor: props.secondary,
    borderColor: 'black',
    fontSize: 30,
    paddingVertical: 8,
    paddingHorizontal: 4,
    borderRadius: 4,
    marginVertical: 10,
  },
  errorText: {
    color: 'orange'
  }
}))