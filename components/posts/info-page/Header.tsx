import * as React from 'react';
// import { useState, useEffect } from 'react';
import { Text, Pressable } from 'react-native'
import {Avatar } from '@rneui/themed'
import { makeStyles } from '@rneui/themed';
import { StackActions } from '@react-navigation/native'
interface IHeaderProps {
  postData: any,
  colors: any,
  navigation: any,
 }
//  Avatar + name
const Header: React.FunctionComponent<IHeaderProps> = ({ postData, colors, navigation}) => {
  // console.log(postData)
  const styles = useStyles(colors)
   return (
     <Pressable
       onPress={() => navigation.dispatch(StackActions.push('Account', { user_id: postData.user.id }))}
       style={styles.container}>

      
       <Avatar
        icon={{name:'account-circle', type:'material-icons'}}
         size={32}
         source={{uri: postData.user.profile_picture_url}}
         rounded
         containerStyle={{ backgroundColor: "#3d4db7"}}
       />
       <Text style={styles.title}> {postData.user.username}</Text>
        </Pressable>

   );
 };
   
 export default Header;
 
 const useStyles = makeStyles((theme, props:any) => ({
  title: {
     color: props.text,
     overflow: 'hidden',
      fontSize: 16,
   },
   container: {
     flexDirection: 'row',
     alignItems: 'center',
     paddingVertical: 8,
     paddingLeft: 8,
   }
}))