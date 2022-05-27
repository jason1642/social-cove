import { Text, View } from 'react-native'
import * as React from 'react';
import { useState, useEffect } from 'react';
import { Button } from '@rneui/base'
interface ILoginProps {
  navigation: any,
}


const Login: React.FunctionComponent<ILoginProps> = ({navigation}) => {
  return (<View>
    <Text>
    This is the log in page
    </Text>
    <Button onPress={() => navigation.goBack()} title="Dismiss" />
  </View>);
};

export default Login;
