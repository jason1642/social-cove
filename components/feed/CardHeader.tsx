import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import {Avatar, Icon } from '@rneui/themed'


interface ICardHeaderProps {
  postData: any,
}

const CardHeader: React.FunctionComponent<ICardHeaderProps> = ({ postData }) => {
  // console.log(postData.user)
  return (
    <View style={styles.container}>
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
    </View>
  );
};

export default CardHeader;


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'teal',
  },
  title: {
    color: 'white',
    fontSize: 20,
    padding: 15
  },

})