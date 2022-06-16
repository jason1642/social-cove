import * as React from 'react';
import { View, Text, TextInput, } from 'react-native'
import {useForm, Controller } from "react-hook-form"
import InputController from '../../components/inputs/InputController'
import { useTheme } from '@react-navigation/native'
import { makeStyles, } from '@rneui/themed'


interface IInputMessageProps {
}

const InputMessage: React.FunctionComponent<IInputMessageProps> = (props) => {
  const { colors } = useTheme()
  const styles = useStyles(colors)
  const { control, handleSubmit, setError, formState: { errors } } = useForm({
    defaultValues: {
      content: '',
    }
  })
  return (
    <View style={{borderWidth: 1, borderColor: 'black',}}>
       <InputController
        label='Message'
        name='content'
        control={control}
        inputStyle={styles.input}
        // type=''
      />
        {errors.content && <Text style={styles.errorText}>{errors.content.message}</Text>}
    </View>
  );
};

export default InputMessage;

const useStyles = makeStyles((theme, props: any) => ({
  container: {
    marginVertical: 5,
    borderColor: props.border,
    borderWidth: 1,
  },
  label: {
    color: props.text
  },
  input: {
    color: props.text,
    backgroundColor: props.secondary,
    borderColor: 'black',
    fontSize: 16,
    paddingVertical: 8,
    paddingHorizontal: 4,
    borderRadius: 4,
    marginVertical: 10,
  },
  errorText: {
    color: 'orange'
  }
}))