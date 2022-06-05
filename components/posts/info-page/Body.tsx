import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { Avatar } from '@rneui/themed';
import { useTheme } from '@react-navigation/native'

interface IBodyProps {
  postData: any,
  colors?: any,
}

const Body: React.FunctionComponent<IBodyProps> = ({ postData, colors }) => {
  const postInfo = postData
  // console.log(postData)
  // const styles = useStyles(colors)
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.likedByRow}>
          <Avatar
          avatarStyle={styles.avatar}
          
        rounded
        size={20}
        source={{ uri: postInfo.user.profile_picture_url}}
        />
          Liked By </Text>
      </View>
      <Text style={styles.bodyText}>

          
    
        
        
        <Text style={styles.username}>{postInfo.user.username}: </Text>
        
        <Text style={styles.description}>{postInfo.content}</Text>
      </Text>
    </View>
  );
};

export default Body



const styles = StyleSheet.create({
  container: {
    padding: 5,
    maxHeight: 120,
    marginBottom: 15,
  },
  avatar: {
    
  },
  likedByRow: { 
    color: 'white',
    paddingLeft: 5,
  },
  username: {
    marginLeft: 6,
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
    // lineHeight: 60,
  },
  bodyText: {
    flexDirection: 'row',
    padding: 3,
    // lineHeight: 60,
  },
  description: {
    color: 'white',
    fontSize: 13,
    // lineHeight: 60,
  },
})