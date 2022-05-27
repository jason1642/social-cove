import * as React from 'react';
import { useState, useEffect } from 'react';
import { Text, View } from 'react-native'
import { Button } from '@rneui/base'


interface IGuestProps {
  navigation: any,
}

const Guest: React.FunctionComponent<IGuestProps> = ({navigation}) => {
  return (<View>
    <Text style={{color: 'white'}}>
    This is the guest view of the account page
    </Text>
    <Button title='Log In' onPress={()=>navigation.navigate('LoginModal')} />
    <Button title='Register an account' onPress={()=>navigation.navigate('RegisterModal')} />
  </View>);
};

export default Guest;
