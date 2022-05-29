import * as React from 'react';
import { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
// import Posts from './Posts';
// import Saved from './Saved';
// import { Icon } from "@rneui/themed";
import { useTheme } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from '../Register'
import Main from './Main'
import Login from '../Login'

interface IAccountProps { }



// const myIcon = <Icon
//   name="heartbeat"
//   type="font-awesome"
//   size={30}
//   color="blue"
//   onPress={()=>console.log('This is from the account bottom nav icon')}
// />;
const AccountStack = createNativeStackNavigator()
const Account: React.FunctionComponent<IAccountProps> = ({ }) => {
   const { colors } = useTheme()
  

  return (

    //   <Tab.Screen
    //     name="Saved"
    //     component={Saved}
    //     options={{
    //       tabBarIcon: () => <IconFill name="android" />
    //     }}
    //   />
  
    <AccountStack.Navigator>

      <AccountStack.Group>
        <AccountStack.Screen
          name='Main'
          component={Main}
          options={
            {
              headerShown: false,
            }
          }
        />
      </AccountStack.Group>

  
      <AccountStack.Group screenOptions={{ presentation: 'modal' }}>
        <AccountStack.Screen options={{headerTitle: 'Register'}} name="RegisterModal" component={Register} />
        <AccountStack.Screen options={{headerTitle: 'Login'}} name="LoginModal" component={Login} />
      </AccountStack.Group>

        </AccountStack.Navigator>
  );
};


export default Account;
