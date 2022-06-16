import { Avatar } from '@rneui/themed';
import * as React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native'
import moment from 'moment'
interface IConversationCardProps {
  conversationData: any,
  navigation: any,
  chattingWithUsername: string,
  currentUser: string,
}

const ConversationCard: React.FunctionComponent<IConversationCardProps> = ({conversationData, currentUser, navigation, chattingWithUsername}) => {
  return (
    <Pressable
      style={styles.container}
      onPress={() => navigation.push('Conversation', { recipient_id: 5 })}>
      <View style={styles.avatarContainer}>
      <Avatar
        // size={60}
        icon={{ name: 'account-circle', type: 'material-icons',  }}
        avatarStyle={{backgroundColor: 'orange' }}
        rounded
        source={{uri: chattingWithUsername === conversationData.sender.username ? conversationData.sender.profile_picture_url : conversationData.recipient.profile_picture_url}}
      />

      </View>
      <View style={styles.bodyContainer}>

        <View >
        <Text style={styles.chattingWithUser}>{chattingWithUsername}</Text>
      </View>
      
        



        <View style={styles.contentWrapper}>
          <View style={{borderWidth: 0, maxWidth: '95%', borderColor: 'purple'}}>
            <Text numberOfLines={1} style={{}}>
              <Text style={styles.messageSender}>
                {conversationData.sender.username !== currentUser ? '' : conversationData.sender.username + ': '}
              </Text>

       
              


                <Text style={styles.latestMessage}>
         {conversationData.content}{conversationData.content}
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

const styles = StyleSheet.create({
  container: { 
    paddingVertical: 8, 
    paddingHorizontal: 4,
    borderWidth: 1,
    borderColor: 'grey',
    marginVertical: 4,
    width: '95%',
    alignSelf: 'center',
    borderRadius: 6,
    flexDirection: 'row',

  },
  latestMessage: {
    // flexWrap: 'nowrap',
    fontSize: 13,
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
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  chattingWithUser: {
    fontWeight: 'bold',
  },
  messageSender: {
    fontWeight: 'bold',
    // borderWidth: 1, 
    // borderColor: 'green',
    fontSize: 13,
  },
  avatarContainer: { 
    width: '10%',
    height: '100%',
  },
  date: {
    fontSize: 10,
    color: 'blue',
  }
})