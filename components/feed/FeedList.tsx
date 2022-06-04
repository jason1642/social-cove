import * as React from 'react';
import { useState, useEffect } from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native'
import FeedCard from './FeedCard'
import {getPopularPosts} from '../../api-helpers/posts'



interface IListProps {
  route?: any,
  navigation: any,
}

const FeedList: React.FunctionComponent<IListProps> = ({ route, navigation }) => {
  // const { query } = route.params
  const [postsArray, setpostsArray] = useState<Array<any>>();
  useEffect(() => {
    getPopularPosts().then(res => {
      // console.log(res.data)
      setpostsArray(res.data)
    }, err => {
      console.log(err)
    })
  }, []);

  return postsArray ?  (
    <FlatList
      contentContainerStyle={styles.container}
      data={postsArray.reverse()}
      renderItem={(item) => <FeedCard navigation={navigation} postData={item.item} />}
    />
  ) : <View>
      <Text>We had trouble loading posts</Text>
  </View>
};

export default FeedList;



const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
    backgroundColor: 'grey',

  }
}
)