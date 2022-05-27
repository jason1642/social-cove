import * as React from 'react';
import { useState, useEffect } from 'react';
import { ScrollView, Text } from 'react-native'
import axios from 'axios'
import Card from '../../components/posts/Card'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import create from '@ant-design/icons/lib/components/IconFont';
import List from '../../components/posts/List'
import Post from '../Post'
interface ISubscribedPostsProps {
}
const Stack = createNativeStackNavigator()
const SubscribedPosts: React.FunctionComponent<ISubscribedPostsProps> = (props) => {
  const [posts, setPosts ] = useState([])


  const fetchPosts = async () => {
    await axios.get('http://localhost:3000/posts').then(res => {
       // console.log(res)
       setPosts(res.data)
    },
      err => console.log(err)
    )
   }
  useEffect(() => {
    fetchPosts()

  }, []);
  return (
    <Stack.Navigator>

      <Stack.Screen
        name='List'
        component={List}
        options={{
          headerTitle: 'Posts from following',
          headerShown: false
        }}
      />
      <Stack.Screen
        name='Post Info'
        component={Post}
      />
    {/* <ScrollView>
      <Text>SUBSCRIBED POSTS</Text>
            {posts && posts.map((ele:any) =>
        <Card key={ele.id} postData={ele} />)}
    </ScrollView> */}
    </Stack.Navigator>
  );
};

export default SubscribedPosts;
