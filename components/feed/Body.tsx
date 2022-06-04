import { Avatar } from '@rneui/themed';
import * as React from 'react';
import { StyleSheet, Text, View, } from 'react-native'
interface ICardFooterProps {
  postInfo: any,
}

const CardBody: React.FunctionComponent<ICardFooterProps> = ({postInfo}) => {
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

export default CardBody;


const styles = StyleSheet.create({
  container: {
    padding: 5,
    maxHeight: 120,
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