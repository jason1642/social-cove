import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import {Avatar } from '@rneui/themed'


interface ICardHeaderProps {
  postData: any,
}

const CardHeader: React.FunctionComponent<ICardHeaderProps> = ({ postData }) => {
  // console.log(postData.user)
  return (
    <View style={styles.container}>
      {postData.user.profile_picture_url === null ?
        <Avatar
         title={'A'}
         size={45}
         rounded
         containerStyle={{ backgroundColor: "#624587"}}
      />
        :
        <Avatar
        title={'B'}
        size={45}
        rounded
        containerStyle={{ backgroundColor: "#3d4db7"}}
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