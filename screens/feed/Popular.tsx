import * as React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native'
import Card from '../../components/posts/Card'
import FeedList from '../../components/feed/FeedList'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Post from '../Post'


interface IPopularProps {
}
const Stack = createNativeStackNavigator()

const Popular: React.FunctionComponent<IPopularProps> = (props) => {


  
  return (
    <Stack.Navigator
      screenOptions={{
      // headerShown: false,
    }}>
      
      <Stack.Screen
        name='List'
        component={FeedList}
        options={{
          headerShown: false,
        }}
        // initialParams={{query: '/'}}
      />
      <Stack.Screen 
        name='Post Info'
        component={Post}
      />
      
    </Stack.Navigator>
  );
};

export default Popular;
