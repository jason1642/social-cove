import * as React from 'react';
import { useState, useEffect } from 'react';
import { View, Text } from 'react-native'
import {Avatar } from '@rneui/themed'
import { makeStyles } from '@rneui/themed';

interface IHeaderProps {
  postData: any,
  colors: any,
 }
//  Avatar + name
const Header: React.FunctionComponent<IHeaderProps> = ({ postData, colors }) => {
  // console.log(postData)
  const styles = useStyles(colors)
   return (
     <View style={styles.container}>
       <Avatar
         title='A'
         size={45}
         rounded
         containerStyle={{ backgroundColor: "#3d4db7"}}
       />
       <Text style={styles.title}> {postData.user.username}</Text>
     </View>
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