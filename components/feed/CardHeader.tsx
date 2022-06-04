import * as React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native'
import {Avatar, Icon } from '@rneui/themed'


interface ICardHeaderProps {
  postData: any,
  navigation: any,
}

const CardHeader: React.FunctionComponent<ICardHeaderProps> = ({ postData, navigation }) => {
  // console.log(postData.user)

  return (
    // <View style={styles.container}>
    <Pressable
    style={styles.container}
       onPress={()=>navigation.navigate('Account', {user_id: postData.user.id})}
      >

{postData.user.profile_picture_url === null ?
        <Avatar
          size={45}
          rounded
          // iconStyle={{height: 30, width: 30}}
          icon={{name:'account-circle', type:'material-icons'}}
      />
        :
        <Avatar
          icon={{name:'account-circle', type:'material-icons'}}
          source={{uri: postData.user.profile_picture_url}}
          size={45}
          rounded
     />
      }        

      
      <Text style={styles.title}>{postData.user.username}</Text>
      </Pressable>
    // </View>
  );
};

export default CardHeader;


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // backgroundColor: 'teal',
  },
  title: {
    color: 'white',
    fontSize: 20,
    padding: 15
  },

})