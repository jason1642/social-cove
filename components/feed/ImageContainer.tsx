import * as React from 'react';
import { View, Image, StyleSheet } from 'react-native'
interface IImageContainerProps {
  imageUrl: string,
}

const ImageContainer: React.FunctionComponent<IImageContainerProps> = ({ imageUrl }) => {
  

  return (<View style={styles.container}>
    <Image
      style={styles.image}
      source={{uri: imageUrl}}
    />
  </View>);
};

export default ImageContainer;


const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width: '100%',
    minHeight: 250,
    maxHeight: 400,
  },
  image: {
    height: '100%',
    width: '100%',
  }
})