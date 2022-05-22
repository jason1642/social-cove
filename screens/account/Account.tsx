import * as React from 'react';
// import { useState, useEffect } from 'react';
// import { View, Text } from 'react-native';
import Posts from './Posts';
import Saved from './Saved';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
interface IAccountProps {}

const Tab = createBottomTabNavigator();
const Account: React.FunctionComponent<IAccountProps> = ({}) => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Posts" component={Posts} />
      <Tab.Screen name="Saved" component={Saved} />
    </Tab.Navigator>
  );
};

export default Account;
