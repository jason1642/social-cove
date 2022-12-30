import * as React from 'react';
import { useState, useEffect } from 'react';
import { ScrollView, Text, FlatList, StyleSheet } from 'react-native'
import axios from 'axios'
import Skeleton from '../../components/feed/Skeleton'
import FeedCard from '../../components/feed/FeedCard'
import {useTheme,useFocusEffect} from '@react-navigation/native'
import { makeStyles, Avatar, } from '@rneui/themed'

interface ISubscribedPostsProps {
  navigation: any,
}

 const fetchPosts = async () => 
    await axios.get('http://localhost:3000/posts').then(res => {
      console.log('FETCHED SUBSCRIBED POSTS')
      // console.log(res.data)
       return res.data
    },
      err => undefined
    )


const SubscribedPosts: React.FunctionComponent<ISubscribedPostsProps> = ({navigation}) => {
  const [postsArray, setPostsArray] = useState<Array<any>>([])
  // const user = useSelector((state: RootState) => state.user)
  const { colors } = useTheme()

  const styles = useStyles(colors)

 
  


  useEffect(() => {
    let isMounted = true; 
    fetchPosts().then(res => {
      isMounted && res && setPostsArray(res)
    })
    // console.log(data, authenticated)
    return () => {
      isMounted = false
    };
  }, []);
  return postsArray.length !== 0 ?  (
    <FlatList
      contentContainerStyle={styles.container}
      data={postsArray}
      renderItem={({ item }) => <FeedCard colors={colors} navigation={navigation} postData={item} /> }
    />
  ) : <Skeleton />
};

export default SubscribedPosts;
const useStyles = makeStyles((theme, props:any) => ({
  container: {
    paddingVertical: 5,
    // backgroundColor: 'grey',

  }
}
))