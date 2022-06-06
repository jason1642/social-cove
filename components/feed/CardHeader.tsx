import * as React from 'react';
import { useState, useEffect } from 'react';

import { Pressable, StyleSheet, Text, View } from 'react-native'
import {Avatar, Icon, makeStyles  } from '@rneui/themed'


interface ICardHeaderProps {
  postData: any,
  navigation: any,
  colors: any,
}

const CardHeader: React.FunctionComponent<ICardHeaderProps> = ({ postData, navigation, colors }) => {
  // console.log(postData.user)
  const styles = useStyles(colors)
  return (
    // <View style={styles.container}>
    <Pressable
    style={styles.container}
       onPress={()=>navigation.navigate('Account', {user_id: postData.user.id})}
      >


        <Avatar
          icon={{name:'account-circle', type:'material-icons'}}
          source={{uri: postData.user.profile_picture_url}}
        size={45}
          rounded
          containerStyle={styles.avatar}
     />
            

      
      <Text style={styles.title}>{postData.user.username}</Text>
      </Pressable>
    // </View>
  );
};

export default CardHeader;


const useStyles = makeStyles((theme, props: any) => ({
  container: {
    flexDirection: 'row',
    // backgroundColor: 'teal',
  },
  title: {
    color: props.text,
    fontSize: 20,
    padding: 15
  },
  avatar: {
    marginLeft: 10,
    backgroundColor: 'grey',
  }
}))