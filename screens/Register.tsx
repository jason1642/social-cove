import * as React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, } from 'react-native'
import { Button } from '@rneui/base'
import { useForm, Controller } from 'react-hook-form'
import {useTheme} from '@react-navigation/native'
import { makeStyles } from '@rneui/themed'
import LogInOutButton from '../components/buttons/LogInOut'
import InputController from '../components/forms/InputController'
import { registerUser } from '../api-helpers/users'
import RNRestart from 'react-native-restart' 

interface IRegisterProps {
  navigation: any,
}

// Pass params indicating how the user reached this screen. ex: account page to modal, or regular log in button
const Register: React.FunctionComponent<IRegisterProps> = ({ navigation }) => {
  const { colors } = useTheme()
  const styles = useStyles(colors)
  const { control, handleSubmit, getValues, setError, formState: { errors } } = useForm({
    defaultValues: {
      username: '',
      password: '',
      email: '',
    }
  })

  const onSubmit = async (data: any) => {

    await registerUser(data).then(res => {
      if (res.error) {
        console.log(res.error)
      } else {
        console.log('Account successfully created')
        console.log(res.data)
        RNRestart.Restart()

      }
    }) 
  }
// Change to something more eloquent 
  const onError = (errors: any) => {
    console.log(errors)
   
  }


  return (
    <View style={styles.container}>
     

      <View style={styles.form}>
      <InputController
        name='Username'
        control={control}
        inputStyle={styles.input}
        type='username'
        minLength={3}
          // controllerProps={}
      />
        {errors.username && <Text style={styles.errorText}>{errors.username.message}</Text>}

        <InputController
        name='Email'
        control={control}
        inputStyle={styles.input}
        minLength={5}
        extraRules={{
            pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "invalid email address"
          }}}
      />
        {errors.email && <Text style={styles.errorText}>{errors.email.message}</Text>}

      <InputController
        name='Password'
        control={control}
        inputStyle={styles.input}
        type='password'
        minLength={6}
          
          // controllerProps={}

        />
      {errors.password && <Text style={styles.errorText}>{errors.password.message}</Text>}
      </View>
      


      <View style={styles.buttonContainer}>


        <LogInOutButton
          name='Submit'
          buttonFunction={handleSubmit(onSubmit, onError)}
          buttonProps={{
            

          }}
        />
        <LogInOutButton
          name='Back'
          buttonFunction={() => navigation.goBack()}
          buttonProps={{
            

          }}
          />
        </View>
    </View>
  );
};

export default Register;


const useStyles = makeStyles((theme, props: any) => ({
  container: {
    flex: 3,
    padding: 24,
    alignItems: 'stretch',
    // justifyContent: 'center',
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
  form: {
    
  },
  buttonContainer: {
    // alignSelf: 'flex-end'
    paddingVertical: 10,
  },
}))