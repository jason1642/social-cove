import * as React from 'react';
import { StyleSheet, View, Text, Pressable, Image } from 'react-native';
import {Button} from '@rneui/base'
interface IThumbnailProps {
  data: any,
  navigation: any,
  }

const Thumbnail: React.FunctionComponent<IThumbnailProps> = ({data, navigation}) => {

  return data !== 'x' ? (


    <Pressable style={styles.container} onPress={()=>navigation.navigate('Post', {postId: data.id})}>
      {/* <View style={styles.container}> */}
   
      {/* <Text>This is a thumbnail</Text> */}
      <Image
        style={styles.image}
        source={{ uri: data.image_url, }}
      />
    {/* </View> */}
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
    backgroundColor: 'green',
    borderColor: 'grey',
    borderWidth: 1,
    // borderRadius: 4,
    width: '32%',
    height: 135,
    // padding: 4,
  },
  image: { 
    height: '100%',
    width: '100%',
  }
})
