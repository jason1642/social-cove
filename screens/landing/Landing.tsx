import * as React from 'react';
import { useState, useEffect } from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Main from './Main'
import { View } from 'react-native'
import Login from '../Login'
import Register from '../Register'
const LandingStack = createNativeStackNavigator()

interface ILandingProps {
  navigation?: any;
  route?: any;
  title?: string;
}

const Landing: React.FunctionComponent<ILandingProps> = ({route, navigation, title}) => {

  // const { someParam } = route.params;
  1
  return (
 

    <LandingStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <LandingStack.Screen
        name='Main'
      >
        {({navigation})=><Main navigation={navigation} title={title} />}
      </LandingStack.Screen>
      <LandingStack.Screen
        name={'Login'}
        component={Login}
        options={{
          headerShown: true,
        }}
      />
      <LandingStack.Screen
        name={'Register'}
        component={Register}
        options={{
          headerShown: true,
        }}
      />
          </LandingStack.Navigator>


    
  );
};

export default Landing;

