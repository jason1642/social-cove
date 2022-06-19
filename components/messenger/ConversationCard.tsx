import { Avatar } from '@rneui/themed'
import * as React from 'react';
import { useState, useEffect } from 'react';

import { View, Text, Pressable } from 'react-native'
import moment from 'moment'
import { makeStyles } from '@rneui/themed'

interface IConversationCardProps {
  conversationData: any,
  navigation: any,
  chattingWithUserData: any,
  currentUser: string,
  colors: any,

}

const ConversationCard: React.FunctionComponent<IConversationCardProps> = ({conversationData, colors, currentUser, navigation, chattingWithUserData}) => {
  const styles = useStyles(colors)
  return (
    <Pressable
      style={styles.container}
      onPress={() => navigation.push('Conversation', { recipient_id: chattingWithUserData.id })}>
      <View style={styles.avatarContainer}>
      <Avatar
        size={45}
        icon={{ size: 45, name: 'account-circle', type: 'material-icons', color: 'grey' }}
        // avatarStyle={{backgroundColor: 'orange' }}
        rounded
        source={{uri: chattingWithUserData.username === conversationData.sender.username ? conversationData.sender.profile_picture_url : conversationData.recipient.profile_picture_url}}
      />

      </View>
      <View style={styles.bodyContainer}>

        <View >
        <Text style={styles.chattingWithUser}>{chattingWithUserData.username}</Text>
      </View>
      
        



        <View style={styles.contentWrapper}>
          <View style={{borderWidth: 0, maxWidth: '95%', borderColor: 'purple'}}>
            <Text numberOfLines={1} style={{}}>
              <Text style={styles.messageSender}>
                {conversationData.sender.username !== currentUser ? '' : conversationData.sender.username + ': '}
              </Text>

       
              


              <Text numberOfLines={1} style={styles.latestMessage}>
         {conversationData.content}
            </Text>
            </Text>
            
              </View>

      
          
        
            
          
          
          </View>
      <View style={{flex: 1}}>
            
            <Text numberOfLines={1} style={styles.date}> {moment(conversationData.created_at).format('MMMM DD, hh:MM a')}</Text>
            </View>
      </View>
      
      

      



    </Pressable>
  
  )
};

export default ConversationCard;

const useStyles = makeStyles((theme, props: any) => ({
  container: { 
    paddingVertical: 8, 
    paddingHorizontal: 4,
    // borderWidth: 1,
    borderColor: props.border,
    marginVertical: 4,
    width: '95%',
    alignSelf: 'center',
    borderRadius: 6,
    flexDirection: 'row',

  },
  latestMessage: {
    // flexWrap: 'nowrap',
    fontSize: 13,
    color: props.text,
    // width: '30%',
    // overflow: 'hidden',

  },
  bodyContainer: {
    paddingLeft: 3,
  },
  contentWrapper: {
    flexDirection: 'row',
    flex: 1,
    width: '100%',
    // justifyContent: 'flex-start',
    // alignItems: 'flex-end',
  },
  chattingWithUser: {
    fontWeight: 'bold',
    color: props.text,
  },
  messageSender: {
    fontWeight: 'bold',
    color: props.text,
    fontSize: 13,
  },
  avatarContainer: { 
    width: 45,
    height: '100%',
  },
  date: {
    fontSize: 10,
    color: '#4370ff',
  }
}))