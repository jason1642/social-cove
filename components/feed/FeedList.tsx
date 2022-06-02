import * as React from 'react';
import { useState, useEffect } from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native'
import FeedCard from './FeedCard'
import {getPopularPosts} from '../../api-helpers/posts'



interface IListProps {
  route: any,
}

const FeedList: React.FunctionComponent<IListProps> = ({ route }) => {
  // const { query } = route.params
  const [postsArray, setpostsArray] = useState();
  useEffect(() => {
    getPopularPosts().then(res => {
      console.log(res.data)
      setpostsArray(res.data)
    }, err => {
      console.log(err)
    })
  }, []);

  return postsArray ?  (
    <FlatList
      contentContainerStyle={styles.container}
      data={postsArray}
      renderItem={(item) => <FeedCard postData={item} />}
    />
  ) : <View>
      <Text>We had trouble loading posts</Text>
  </View>
};

export default FeedList;



const styles = StyleSheet.create({

  columnWrapper: {
    justifyContent: 'space-evenly',
    // alignContent: 'space-around',
    // flexWrap: 'wrap',
  },
  container: {
    flex: 1,
    // flexDirection: 'row',
    // flexWrap: 'wrap',
    // justifyContent: 'space-evenly',

    paddingVertical: 5,
    width: '100%',
    backgroundColor: 'grey'
    // justifyContent: 'flex-start'
  }
}
)