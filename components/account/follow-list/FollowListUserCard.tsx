import * as React from 'react';
import {ListItem, Avatar} from '@rneui/themed'
import { Pressable, StyleSheet, Text, } from 'react-native';
interface IFollowListUserCardProps {
  userData: any,
  navigation: any,
}

const FollowListUserCard: React.FunctionComponent<IFollowListUserCardProps> = ({userData, navigation, }) => {
  return (
    <Pressable
      style={styles.container}
        onPress={()=>navigation.push('Account', {user_id: userData.id})}
      >
        <Avatar
        rounded
        size={46}
        icon={{name:'account-circle', type:'material-icons'}}
        source={{ uri: userData.profile_picture_url }}
        containerStyle={styles.avatar}
      />
      <Text>{userData.username}</Text>
      </Pressable>
      
  );
};

export default FollowListUserCard;


const styles = StyleSheet.create({
  avatar: {
    alignSelf: 'center',
    backgroundColor: 'orange',
    margin: 10,
  },
  container: { 
    flexDirection: 'row',
    alignItems: 'center',
    // alignSelf: 'center',
  },
  username: {
    
  },

})