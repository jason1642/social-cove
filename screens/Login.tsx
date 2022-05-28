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
  const { control, handleSubmit, watch, formState: { errors } } = useForm({
    defaultValues: {
      username: '',
      password: ''
    }
  })
  
  const onSubmit = async (data: any) => {
    await loginUser(data).then(res => {
      console.log(res.data) 
    }, err => {
      console.log(err)
    })
  }


  return (<View style={styles.container}>
    <Controller
      control={control}
      name='username'
      rules={{ required: true }}
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
      {errors.username && <Text style={styles.errorText}>Username is required.</Text>}

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
      {errors.password && <Text style={styles.errorText}>Password is required.</Text>}





    <Button 
      style={styles.button}
      title='Submit'
      onPress={handleSubmit(onSubmit)}
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