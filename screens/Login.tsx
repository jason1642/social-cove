import { Text, View, TextInput } from 'react-native'
import * as React from 'react';
import { useState, useEffect } from 'react';
import { Button } from '@rneui/base'
import { makeStyles } from '@rneui/themed'
import {useTheme} from '@react-navigation/native'
import {useForm, Controller } from "react-hook-form"
import { loginUser } from '../api-helpers/users'
interface ILoginProps {
  navigation: any,
}


const Login: React.FunctionComponent<ILoginProps> = ({ navigation }) => {
  const { colors } = useTheme()
  const styles = useStyles(colors)
  const { control, getValues, handleSubmit, setError, formState: { errors } } = useForm({
    defaultValues: {
      username: '',
      password: ''
    }
  })
  
  const onSubmit = async (data: any) => {

    
    return await loginUser(data).then(res => {
          const {username, password} = getValues()
      console.log(data)
        console.log(res)
        if (res.error) {
          res.error === 'Username not found' ?
          setError('username', { type: 'required', message: 'Username not found' }, { shouldFocus: true })
          :
          setError('password', { type: 'required', message: 'Incorrect Password' }, { shouldFocus: true })
        }
      })
  }
  
  const onError = (errors, e) => {
    if (errors.username) {
      setError('username', {type: 'required', message: 'Username is required'}, {shouldFocus: true})
    }
    if (errors.password) {
      setError('password', {type: 'required', message: 'Password is required'}, {shouldFocus: true})
    }
  }
  useEffect(() => {
    console.log(errors)
  }, [errors]);

  return (<View style={styles.container}>
    <Controller
      control={control}
      name='username'
      rules={{ required: true, min: 4 }}
      render={({ field: { onChange, onBlur, value } }) => (
        <TextInput
          style={styles.input}
          onBlur={onBlur}
          onChangeText={onChange}
          value={value}
          placeholder='Username'
        />
      )}
    />
      {errors.username && <Text style={styles.errorText}>{errors.username.message}</Text>}

    <Controller
      control={control}
      name='password'
      rules={{ required: true }}
      render={({ field: { onChange, onBlur, value } }) => (
        <TextInput
          style={styles.input}
          onBlur={onBlur}
          onChangeText={onChange}
          value={value}
          placeholder='Password'
      />)} 
        />
      {errors.password && <Text style={styles.errorText}>{errors.password.message}</Text>}





    <Button 
      style={styles.button}
      title='Submit'
      onPress={handleSubmit(onSubmit, onError)}
        />

    <Button
      style={styles.button}
      onPress={() => navigation.goBack()} title="Back" />


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
  }
}))