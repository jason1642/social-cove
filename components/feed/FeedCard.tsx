import * as React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native'
import ImageContainer from './ImageContainer'
import CardHeader from './CardHeader'
import Body from './Body'

interface IFeedCardProps {
  postData: any,
  navigation: any,
}

const FeedCard: React.FunctionComponent<IFeedCardProps> = ({ postData, navigation }) => {
  // console.log(postData)


  return (
    <View style={styles.container}>
      <CardHeader postData={postData} />
      
      <Pressable onPress={() => {
        // navigation.setOptions({title: 'UPDATED!'})
        navigation.navigate('Post Info', { postId: postData.id })
      }}>
        <ImageContainer
        imageUrl={postData.image_url}
      />
      </Pressable>
      <Body postInfo={postData}/>
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