import * as React from 'react';
import { View, Image, StyleSheet } from 'react-native'
interface IMainImageProps {
}

const MainImage: React.FunctionComponent<IMainImageProps> = (props) => {
  return (<View style={styles.container}>
    <Image
      source={{ uri: 'https://media.istockphoto.com/photos/glass-of-water-lemon-and-ice-picture-id1293618957?b=1&k=20&m=1293618957&s=170667a&w=0&h=8efhFKE5jdGxHvsyd9Ytr3sDU0_kE0VRzA6nx41tqCs='}}
      style={styles.image}
    />
  </View>);
};

export default MainImage;


const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  image: {
    height: 300,
    minWidth: '90%',
    maxWidth: '97%',
    
  }
})