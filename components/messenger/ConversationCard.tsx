import * as React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native'
interface IConversationCardProps {
  conversationData: any,
  navigation: any,
}

const ConversationCard: React.FunctionComponent<IConversationCardProps> = ({conversationData, navigation, }) => {
  return (
    <Pressable
      style={styles.container}
      onPress={()=>navigation.push('Conversation', {recipient_id: 5})}>
       <Text>
        {conversationData.recipient.username}
      </Text>
      <Text style={styles.latestMessage}>
        {conversationData.content}
      </Text>
    </Pressable>
  
  )
};

export default ConversationCard;

const styles = StyleSheet.create({
  container: { 
    padding: 4, 
    borderWidth: 1,
    borderColor: 'grey',

  },
  latestMessage: {

  }

})