import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native'
interface IImageContainerProps {
  pickedImage: string,
}

const ImageContainer: React.FunctionComponent<IImageContainerProps> = ({pickedImage,}) => {
  return (
    <View style={styles.container}>
        {pickedImage && <Image
        style={styles.image}
        source={{uri: pickedImage}}
      />}
      </View>
  );
};

export default ImageContainer;

const styles = StyleSheet.create({
  container: {
     // justifyContent: 'center',
     height: 250,
     // width: 300,
     marginVertical: 15,
     alignItems: 'center',
  },
  image: { 
    height: '100%',
    width: '100%',
  }
})