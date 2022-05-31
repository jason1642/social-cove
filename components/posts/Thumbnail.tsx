import * as React from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import {Button} from '@rneui/base'
interface IThumbnailProps {
  data: any,
  navigation: any,
  }

const Thumbnail: React.FunctionComponent<IThumbnailProps> = ({data, navigation}) => {

  return data !== 'x' ? (


    <Pressable style={styles.container} onPress={()=>navigation.navigate('Post', {postId: data.id})}>
      {/* <View style={styles.container}> */}
   
      <Text>This is a thumbnail</Text>
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
    borderColor: 'black',
    borderWidth: 1,
    width: '32%',
    height: 135,
    padding: 4,
  }
})
