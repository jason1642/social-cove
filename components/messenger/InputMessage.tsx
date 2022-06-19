import * as React from 'react';
import { View, Text, TextInput, } from 'react-native'
import {useForm, Controller } from "react-hook-form"
import InputController from '../../components/inputs/InputController'
import { useTheme } from '@react-navigation/native'
import { makeStyles, } from '@rneui/themed'
import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3000'
})

interface IInputMessageProps {
  currentUser: any,
  recipient: any,
}

const InputMessage: React.FunctionComponent<IInputMessageProps> = ({currentUser, recipient}) => {
  const { colors } = useTheme()
  const styles = useStyles(colors)
  const { control, handleSubmit, setError, setValue, formState: { errors } } = useForm({
    defaultValues: {
      content: '',
    }
  })


  const onSubmitMessage = async (data: any) => {
    console.log('SENDING A MESSAGE', data.content)
    await api.post('/private_chat/send_message', {
      sender_id: currentUser.id,
      recipient_id: recipient.id,
      content: data.content
    }).then(res => {
      setValue('content', '')
      
    })

  }

  const onError = (err:any) => {
    console.log(err)
  }

  return (
    <View style={styles.container}>
       <InputController
        label='Message'
        name='content'
        control={control}
        hideLabel={true}
        inputStyle={styles.input}
        inputProps={{
          onSubmitEditing: handleSubmit(onSubmitMessage, onError)
        }}

      />
        {errors.content && <Text style={styles.errorText}>{errors.content.message}</Text>}
    </View>
  );
};

export default InputMessage;

const useStyles = makeStyles((theme, props: any) => ({
  container: {
    borderTopWidth: 1,
    // borderWidth: 1,
    borderColor: 'grey',
    // borderColor: props.border,
    // borderWidth: 1,
    
  },
  label: {
    color: props.text
  },
  input: {
    color: props.text,
    backgroundColor: props.secondary,
    // borderColor: 'black',
    fontSize: 16,
    // borderWidth: 0,
    paddingVertical: 8,
    paddingHorizontal: 4,
    borderRadius: 4,
    marginVertical: 10,
    width: '97%',
    alignSelf: 'center',
  },
  errorText: {
    color: 'orange'
  }
}))