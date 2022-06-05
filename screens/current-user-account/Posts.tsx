import { Button } from '@rneui/base';
import * as React from 'react';
// import { useState, useEffect } from 'react';
import { Text, View, ScrollView, FlatList, StyleSheet } from 'react-native';
import { makeStyles, Avatar, } from '@rneui/themed'
import Thumbnail from '../../components/posts/Thumbnail'
interface IPostsProps {
  userPosts: any,
  navigation: any,
}

const Posts: React.FunctionComponent<IPostsProps> = ({userPosts, navigation }) => {




  // console.log(userPosts[0])
  return (
    <FlatList
      contentContainerStyle={styles.container}
      columnWrapperStyle={styles.columnWrapper}
      data={[...userPosts, 'x', 'x']}
      renderItem={({item}) => <Thumbnail navigation={navigation} data={item}/>}
      numColumns={3}
    />
    
  );
};

export default Posts;


const styles = StyleSheet.create({

  columnWrapper: {
    justifyContent: 'space-evenly',
    // alignContent: 'space-around',
    // flexWrap: 'wrap',
  },
  container: {
    // flex: 1,
    // flexDirection: 'row',
    // flexWrap: 'wrap',
    // justifyContent: 'space-evenly',

    paddingVertical: 5,
    width: '100%',
    // backgroundColor: 'grey'
    // justifyContent: 'flex-start'
  }
}
)
