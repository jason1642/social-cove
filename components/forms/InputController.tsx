import * as React from 'react';
import { useState, useEffect } from 'react';
import { useForm, Controller } from "react-hook-form"
import { Text, View, TextInput, StyleSheet } from 'react-native'
import { useTheme } from '@react-navigation/native'
import { makeStyles, } from '@rneui/themed'

interface IAppProps {
  name: string,
  control: any,
  inputStyle: any,
  type?: any,
  controllerProps?: any,
  inputProps?: any,
  minLength?: number,
  extraRules?: any,
}


const App: React.FunctionComponent<IAppProps> = ({ name, control, inputStyle, type, inputProps, controllerProps, extraRules, minLength = 0 }) => {
  const { colors } = useTheme()
  const styles = useStyles(colors)
  return (
    <View style={styles.container}>

      <Text style={styles.label}>{name}:</Text>
      <Controller

        name={name.toLowerCase()}
        control={control}

        rules={{
          required: {
            value: true,
            message: `${name} is required`
          },
          minLength: {
            value: minLength,
            message: `${name} must be atleast ${minLength} characters long`
          },
         ...extraRules
          
          
        }}
        render={({ field: { onChange, onBlur, value } }) =>
        (<TextInput
          style={inputStyle}
          onBlur={onBlur}
          onChangeText={onChange}
          value={value.toLowerCase()}
          placeholder={name}
          textContentType={type}
          secureTextEntry={type === 'password' ? true : false}
          {...inputProps}
        />)}
        {...controllerProps}
      />

    </View>
  );
};

export default App;

const useStyles = makeStyles((theme, props: any) => ({
  container: {
    marginVertical: 5,
  },
  label: {
    color: props.text
  }
}))

// '#44c77a',