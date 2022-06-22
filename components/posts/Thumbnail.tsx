import * as React from 'react';
import { StyleSheet, View, Text, Pressable, Image } from 'react-native';
import { Button } from '@rneui/base'
import { StackActions } from '@react-navigation/native'



interface IThumbnailProps {
  data: any,
  navigation: any,
  }

const Thumbnail: React.FunctionComponent<IThumbnailProps> = ({data, navigation}) => {
  
  return data !== 'x' ? (

    <Pressable style={styles.container} onPress={() =>
      navigation.dispatch(StackActions.push('Post Info', { postId: data.id }))
    }>
      <Image
        style={styles.image}
        source={{ uri: data.image_url, }}
      />
        </Pressable>
  ) : 
    (<View style={{height: 10, width: '32%'}}>
    </View>)
};

export default Thumbnail;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignSelf: 'flex-start',
    
    marginVertical: 3,
    backgroundColor: 'grey',
    // borderColor: 'grey',
    // borderWidth: 1,
    // borderRadius: 4,
    width: '32.5%',
    height: 135,
    // padding: 4,
  },
  image: { 
    height: '100%',
    width: '100%',
  }
})
