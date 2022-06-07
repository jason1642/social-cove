import * as React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native'
import ImageContainer from './ImageContainer'
import CardHeader from './CardHeader'
import Body from './Body'
import { StackActions } from '@react-navigation/native'


interface IFeedCardProps {
  postData: any,
  navigation: any,
  colors: any,
}

const FeedCard: React.FunctionComponent<IFeedCardProps> = ({ postData, navigation, colors }) => {
  // console.log(postData)


  return (
    <View style={styles.container}>
      <CardHeader colors={colors} navigation={navigation} postData={postData} />
      
      <Pressable onPress={() => {
        // navigation.setOptions({title: 'UPDATED!'})
        navigation.dispatch(StackActions.push('Post Info', { postId: postData.id }))
      }}>
        <ImageContainer
        imageUrl={postData.image_url}
      />
      </Pressable>
      <Body colors={colors} postInfo={postData}/>
    </View>
  );
};

export default FeedCard;


const styles = StyleSheet.create({
  container: {
    // flex: 1,
    marginVertical: 8,
    minHeight: 450,
  }
})