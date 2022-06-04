import * as React from 'react';
import { View, TextInput, StyleSheet, } from 'react-native'
import InputController from '../../components/inputs/InputController'
import {useForm } from "react-hook-form"
import {createComment } from '../../api-helpers/posts'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'

interface IInputProps {
  postId: number,
}

const Input: React.FunctionComponent<IInputProps> = ({postId,}) => {
  const user = useSelector((state: RootState) => state.user.data)
  const { control, handleSubmit, setError, formState: { errors } } = useForm({
    defaultValues: {
      userComment: '',
    }
  })

  const onSubmit = async (data: any) => {
    console.log(data)
    await createComment({ content: data.userComment }, postId)
  }

  const onError = async () => {

  }
  return (
    <View style={styles.container}>
      <InputController
        label='Comment'
        name='userComment'
        inputStyle={styles.input}
        control={control}
        inputProps={{
          onSubmitEditing: handleSubmit(onSubmit, onError)
        }}
      />

    </View>
  );
};

export default Input;


const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  input: {
    backgroundColor: 'grey',
    padding: 5,
    borderRadius: 3,
  },
})