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
  const [posts, setPosts ] = useState([])

  useEffect(() => {
    if (route.params) {
      // Post updated, do something with `route.params.post 
      // For example, send the post to the server
      // console.log(route) 

    }

    
  }, [route.params]);

  useEffect(() => {
    // console.log(posts)
  }, [posts]);
  // useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerRight: () => (
  //       <Button onPress={()=> setCount(c=>c + 1)} title="Update count" />
  //     )
  //   })
  // },[])
  return (
    <Tab.Navigator
      // screenOptions={{headerShown: false}}
    >

    
      {/* <Text>This is the FEED</Text> */}
      <Tab.Screen
        name='Subscribed Posts'
        component={SubscribedPosts} 
        />
      <Tab.Screen
        name='Popular'
        component={Popular}
      />
 

{/* 
      {posts && posts.map((ele:any) =>
        <Card key={ele.id} postData={ele} />)}
       */}



      {/* <Button 
        title="Back Home"
        onPress={() => navigation.navigate('Home')}
      />
      <Button 
        title="Update the title"
        onPress={() => navigation.setOptions({ title: 'Updated' })}
      /> */}
    </Tab.Navigator>
  );
};

export default Feed;
