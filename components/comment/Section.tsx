import * as React from 'react';
import { useState, useEffect } from 'react';
import { FlatList, View, Text, LogBox} from 'react-native'
import Card from './Card'
import { makeStyles } from '@rneui/themed'
import Input from './Input'
import { RootState } from '../../redux/store'
import { useSelector } from 'react-redux'



interface ISectionProps {
  colors: any,
  commentArray: any,
  navigation: any,
  postId: any,
}

const Section: React.FunctionComponent<ISectionProps> = ({ colors, postId, commentArray, navigation }) => {
  const styles = useStyles(colors)
  // console.log(commentArray)
  const currentUser = useSelector((state: RootState) => state.user.data)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{commentArray.length} Comment(s)</Text>


      <Input postId={postId} />

      {/* <View> */}
       {commentArray &&  <FlatList
        data={commentArray}
        horizontal={false}
          renderItem={({ item, index }) => <Card navigation={navigation} key={item.key} colors={colors} commentData={item} />}
        />}
        {/* {
          commentArray.map((ele: any) => <Card navigation={navigation} key={ele.id} colors={colors} commentData={ele} />)
        } */}
      {/* </View> */}
    </View>
  );
};
 
export default Section;


const useStyles = makeStyles((theme, props: any) => ({
  container: {
    padding: 10,
  },
  title: {
    color: props.text,
    fontSize: 16,
  }
}))