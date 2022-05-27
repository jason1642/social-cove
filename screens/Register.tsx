import * as React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, } from 'react-native'
import { Button } from '@rneui/base'
interface IRegisterProps {
  navigation: any,
}

// Pass params indicating how the user reached this screen. ex: account page to modal, or regular log in button
const Register: React.FunctionComponent<IRegisterProps> = ({navigation}) => {
  return (
    <View>
      <Text>Register an account here</Text>
      <Button onPress={() => navigation.goBack()} title="Dismiss" />
    </View>
  );
};

export default Register;
