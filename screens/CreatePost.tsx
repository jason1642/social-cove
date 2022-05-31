import * as React from 'react';
import { useState, useEffect } from 'react';
import { Text, View, } from 'react-native'
import {makeStyles} from '@rneui/themed'
import { useTheme } from '@react-navigation/native'
import RNRestart from 'react-native-restart'
import { useForm, useController } from 'react-hook-form'
import InputController from '../components/forms/InputController'
import { launchImageLibrary } from 'react-native-image-picker'
import { Button } from '@rneui/base';



interface ICreatePostProps {
}

const CreatePost: React.FunctionComponent<ICreatePostProps> = (props) => {

  const { colors } = useTheme()
  const styles = useStyles(colors)
  const { control, handleSubmit, setValue, setError, formState: { errors } } = useForm({
    defaultValues: {
      image: '',
      description: '',
      title:''
    }
  })

  const handleChoosePhoto = async () => {
    await launchImageLibrary({ mediaType: 'photo', presentationStyle: 'formSheet' },
      (res:any) => {
        console.log(res.assets[0].fileName)
        setValue('image', res.assets[0].fileName)
    })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create A Post</Text>
      <Text style={styles.title}>Create a post with this form</Text>


      <InputController
        name='image'
        control={control}
        type='URL'
        inputStyle={styles.input}
        inputProps={{
          editable: false,
          placeholderTextColor: 'black',
        }}
      />
      <Button
        title='Choose Image'
        onPress={handleChoosePhoto}
      />
    </View>
  );
};

export default CreatePost;

const useStyles = makeStyles((theme, props: any) => ({
  container: {
    padding: 15,
  },
  title: {
    color: props.text,
    fontSize: 24,
  }
  ,input: {
    color: 'black',
    backgroundColor: 'white',
    borderColor: 'black',
    fontSize: 14,
    paddingVertical: 8,
    paddingHorizontal: 4,
    borderRadius: 4,
    marginVertical: 10,
  },
}))
