import * as React from 'react';
import { useState, useEffect } from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native'
import FeedCard from './FeedCard'
import {getPopularPosts} from '../../api-helpers/posts'
import Skeleton from './Skeleton'
import { RootState } from '../../redux/store'
import {useSelector} from 'react-redux'
import { makeStyles } from '@rneui/themed'
import {useTheme,useFocusEffect} from '@react-navigation/native'

interface IListProps {
  route?: any,
  navigation: any,
}

const FeedList: React.FunctionComponent<IListProps> = ({ route, navigation }) => {
  const { colors } = useTheme()
  const styles = useStyles(colors)

  const user = useSelector((state: RootState) => state.user)
  const [postsArray, setpostsArray] = useState<Array<any>>();
  useEffect(() => {
    getPopularPosts().then(res => {
      // console.log(res.data)
      setpostsArray(res.data)
      console.log("Fetching posts data")
    }, err => {
      console.log(err)
    })
  }, [user.data]);

  return postsArray ?  (
    <FlatList
      contentContainerStyle={styles.container}
      data={postsArray.reverse()}
      renderItem={(item) => <FeedCard colors={colors} navigation={navigation} postData={item.item} />}
    />
  ) : <Skeleton />
};

export default FeedList;



const useStyles = makeStyles((theme, props:any) => ({

  container: {
    paddingVertical: 5,
    // backgroundColor: 'grey',

  }
}
))