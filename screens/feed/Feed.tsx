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
import MainMessagesOverview from '../messages/MessagesDashboard'
import Conversation from '../messages/Conversation';

interface IFeedProps {
  route?: any,
  navigation: any,
}
 
const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator()
const Feed: React.FunctionComponent<IFeedProps> = () => {

  

  return (
    <Stack.Navigator
    >
      

      <Stack.Screen
        name='Main'
        options={({ navigation }) => ({

          headerTitle: 'Home',
          headerRight: ()=> (<Button onPress={()=>navigation.push('Messages Dashboard', )} title='Messages' />)

          // headerShown: false,
        })}
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


      <Stack.Screen
        name='Messages Dashboard'
        component={MainMessagesOverview}
        options={{
          headerTitle: 'Messages',
        }}
      />

      <Stack.Screen 
        name='Conversation'
        component={Conversation}
        
      />
      </Stack.Navigator>
  );
};

export default Feed;
