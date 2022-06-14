import * as React from 'react';
import { useState, useEffect } from 'react';
import { ScrollView, Text, FlatList, StyleSheet } from 'react-native'
import axios from 'axios'
import Skeleton from '../../components/feed/Skeleton'
import FeedCard from '../../components/feed/FeedCard'

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
  const [postsArray, setPostsArray] = useState([])
  // const user = useSelector((state: RootState) => state.user)


 
  


  useEffect(() => {
    let isMounted = true; 
    fetchPosts().then(res => {
      isMounted && setPostsArray(res)
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
      renderItem={({item}) => <FeedCard navigation={navigation} postData={item} /> }
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