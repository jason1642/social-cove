import * as React from 'react';
import { useState, useEffect } from 'react';
import { ScrollView, Text } from 'react-native'
import axios from 'axios'
import Card from '../../components/posts/Card'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import create from '@ant-design/icons/lib/components/IconFont';
import List from '../../components/posts/List'
import Post from '../Post'
import {useDispatch, useSelector} from 'react-redux'
import FeedList from '../../components/feed/FeedList';

interface ISubscribedPostsProps {
  navigation: any,
}
const Stack = createNativeStackNavigator()

const SubscribedPosts: React.FunctionComponent<ISubscribedPostsProps> = ({navigation}) => {
  const [posts, setPosts ] = useState([])
  const { data, authenticated, token } = useSelector((state: any) => state.user)
  const dispatch = useDispatch()
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
    // console.log(data, authenticated)
  
  }, []);
  return (
    <FeedList
      navigation={navigation}
    />
  );
};

export default SubscribedPosts;
