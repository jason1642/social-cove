import * as React from 'react';
import { useState, useEffect, useLayoutEffect } from 'react';
import axios from 'axios'
import { Text, ScrollView, Button } from 'react-native'
import Card from '../../components/posts/Card'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Popular from './Popular';
import SubscribedPosts from './SubscribedPosts'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

interface IFeedProps {
  route: any,
  navigation: any,
}
 
const Tab = createMaterialTopTabNavigator();

const Feed: React.FunctionComponent<IFeedProps> = ({ route, navigation }) => {

  useEffect(() => {
    if (route.params) {
      // Post updated, do something with `route.params.post 
      // For example, send the post to the server
      // console.log(route) 
    }
  }, [route.params]);

  return (
    <Tab.Navigator>

      <Tab.Screen
        name='Subscribed Posts'
        component={SubscribedPosts} 
        />
      <Tab.Screen
        name='Popular'
        component={Popular}
      />
 
    </Tab.Navigator>
  );
};

export default Feed;
