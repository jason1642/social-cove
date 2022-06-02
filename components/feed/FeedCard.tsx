import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native'
import ImageContainer from './ImageContainer'

interface IFeedCardProps {
  postData: any,
}

const FeedCard: React.FunctionComponent<IFeedCardProps> = ({ postData }) => {
  // console.log(postData)


  return (
    <View style={styles.container}>
      <Text>{postData.title}</Text>
      <ImageContainer
        imageUrl={postData.image_url}
      />
    </View>
  );
};

export default FeedCard;


const styles = StyleSheet.create({
  container: {
    // flex: 1,
    minHeight: 450,
  }
})