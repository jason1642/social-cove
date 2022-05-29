import * as React from 'react';
import { useState, useEffect } from 'react';
import {useForm, Controller } from "react-hook-form"
import { Text, View, TextInput } from 'react-native'


interface IAppProps {
  name: string,
  control: any,
  inputStyle: any,
  type?: any
}


const App: React.FunctionComponent<IAppProps> = ({ name, control, inputStyle, type }) => {
  return (
    <Controller
      name={name.toLowerCase()}
      control={control}
      rules={{
        required: true, 
        min: 4,
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
      />)}
    />
  );
};

export default App;
