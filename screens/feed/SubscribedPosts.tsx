import * as React from 'react';
import { useState, useEffect } from 'react';
import { ScrollView, Text, FlatList, StyleSheet } from 'react-native'
import axios from 'axios'
import Card from '../../components/posts/Card'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import create from '@ant-design/icons/lib/components/IconFont';
import List from '../../components/posts/List'
import Post from '../Post'
import {useDispatch, useSelector} from 'react-redux'
import FeedList from '../../components/feed/FeedList';
// import { RootState } from '../../redux/store'
import Skeleton from '../../components/feed/Skeleton'
import FeedCard from '../../components/feed/FeedCard'

interface ISubscribedPostsProps {
  navigation: any,
}
const Stack = createNativeStackNavigator()







  





const SubscribedPosts: React.FunctionComponent<ISubscribedPostsProps> = ({navigation}) => {
  const [postsArray, setPostsArray] = useState([])
  // const user = useSelector((state: RootState) => state.user)

  const { data, authenticated, token } = useSelector((state: any) => state.user)
  const dispatch = useDispatch()
  const fetchPosts = async () => {
    await axios.get('http://localhost:3000/posts').then(res => {
       console.log('FETCHED SUBSCRIBED POSTS')
       setPostsArray(res.data)
    },
      err => console.log(err)
    )
  }
  

  useEffect(() => {
    console.log("RENDERING LIST NOW111")
  }, [postsArray]);

  useEffect(() => {
    fetchPosts()
    // console.log(data, authenticated)
  
  }, []);
  return postsArray.length !== 0 ?  (
    <FlatList
      contentContainerStyle={styles.container}
      data={postsArray}
      renderItem={(item) => <FeedCard navigation={navigation} postData={item.item} /> }
    />
  ) : <Skeleton />
};

export default SubscribedPosts;
const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
    // backgroundColor: 'grey',

  }
}
)