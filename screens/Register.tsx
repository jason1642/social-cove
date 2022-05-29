import * as React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, } from 'react-native'
import { Button } from '@rneui/base'
import { useForm, Controller } from 'react-hook-form'
import {useTheme} from '@react-navigation/native'
import { makeStyles } from '@rneui/themed'
import LogInOutButton from '../components/buttons/LogInOut'
import InputController from '../components/forms/InputController'

interface IRegisterProps {
  navigation: any,
}

// Pass params indicating how the user reached this screen. ex: account page to modal, or regular log in button
const Register: React.FunctionComponent<IRegisterProps> = ({ navigation }) => {
  const { colors } = useTheme()
  const styles = useStyles(colors)
  const { control, handleSubmit, setError, formState: { errors } } = useForm({
    defaultValues: {
      username: '',
      password: '',
      email: '',
    }
  })

  const onSubmit = (data: any) => {
    
  }

  const onError = (errors:any) => {
    if (errors.username) {
      setError('username', {type: 'required', message: 'Username is required'}, {shouldFocus: true})
    }
    if (errors.password) {
      setError('password', {type: 'required', message: 'Password is required'}, {shouldFocus: true})
    }
    if (errors.email) {
      setError('email', { type: 'required', message: 'Email is required' }, {shouldFocus: true})
    }
  }


  return (
    <View style={styles.container}>
      <Text>Register an account here</Text>


      <InputController
        name='Username'
        control={control}
        inputStyle={styles.input}
        type='username'
      />
        {errors.username && <Text style={styles.errorText}>{errors.username.message}</Text>}

        <InputController
        name='Email'
        control={control}
        inputStyle={styles.input}
        // type='username'
      />

      <InputController
        name='Password'
        control={control}
        inputStyle={styles.input}
        type='password'
        />
      {errors.password && <Text style={styles.errorText}>{errors.password.message}</Text>}

      <LogInOutButton
        name='Submit'
        buttonFunction={()=>handleSubmit(onSubmit, onError)}
      />
      <LogInOutButton
        name='Back'
        buttonFunction={() => navigation.goBack()}
        
        />
    </View>
  );
};

export default Register;


const useStyles = makeStyles((theme, props: any) => ({
  container: {
    flex: 3,
    padding: 24,
    alignItems: 'stretch',
  },
  input: {
    color: props.text,
    backgroundColor: 'grey',
    borderColor: 'black',
    fontSize: 30,
    paddingVertical: 8,
    paddingHorizontal: 4,
    borderRadius: 4,
    marginVertical: 10,
  },
  errorText: {
    color: 'orange'
  },
}))