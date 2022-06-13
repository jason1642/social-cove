import * as React from 'react';
import { useState, useEffect, useLayoutEffect } from 'react';
import axios from 'axios'
import { Text, ScrollView, Button } from 'react-native'
import Card from '../../components/posts/Card'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Popular from './Popular';
import SubscribedPosts from './SubscribedPosts'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Post from '../Post'
import Account from '../Account'
import FollowingList from '../../components/account/follow-list/FollowList';


interface IFeedProps {
  route?: any,
  navigation: any,
}
 
const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator()
const Feed: React.FunctionComponent<IFeedProps> = (
  // { route, navigation }
) => {

  // useEffect(() => {
  //   if (route.params) {
  //     // Post updated, do something with `route.params.post 
  //     // For example, send the post to the server
  //     // console.log(route) 
  //   }
  // }, [route.params]);

  return (
    <Stack.Navigator
    >
      

      <Stack.Screen
        name='Main'
        options={{
          headerTitle: 'Home',
        }}
      >
        {() => <Tab.Navigator
          // screenOptions={{lazy: true}}
        >
        <Tab.Screen
        name='Subscribed Posts'
        component={SubscribedPosts} 
        />
      <Tab.Screen
        name='Popular'
            component={Popular}
            options={{lazy: true}}
        />
    </Tab.Navigator>}
      </Stack.Screen>



      <Stack.Screen
        name='Post Info'
        component={Post}
      />
      
        <Stack.Screen
        name='Account'
        component={Account}
        options={{
          headerTitle: ''
        }}
      />
      <Stack.Screen
        name='Follow List'
        component={FollowingList}
        options={{
          headerTitle: ''
        }}  
      />

      </Stack.Navigator>
  );
};

export default Feed;
