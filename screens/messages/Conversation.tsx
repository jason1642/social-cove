import * as React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios'
import { RootState } from '../../redux/store'
import {useSelector} from 'react-redux'
import { ScrollView, View, Text, FlatList, StyleSheet,  } from 'react-native';
import MessageBubble from '../../components/messenger/MessageBubble';
import InputMessage from '../../components/messenger/InputMessage';



interface IConversationProps {
  navigation: any,
  route: any,
}

const Conversation: React.FunctionComponent<IConversationProps> = ({ navigation, route }) => {
  const {recipient_id} = route.params
  const [currentChat, setCurrentChat] = useState<any>();
  const currentUser = useSelector((state: RootState)=> state.user.data)

  useEffect(() => {
    axios.post('http://localhost:3000/private_chat/conversation', {
      sender_id: 2,
      recipient_id: recipient_id
    }).then(res => {
      // console.log(res.data)
      setCurrentChat(res.data)
    })
  
  }, [recipient_id])



  useEffect(() => {
    currentChat && navigation.setOptions({
      headerTitle: currentChat[0].sender.id === currentUser.id ? currentChat[0].recipient.username : currentChat[0].sender.username
    })
  }, [currentChat]);

  return currentChat ? (
    <View style={{flex: 1}}>
      <FlatList
            data={currentChat}
            style={{
              // borderWidth: 1,
              // flex: 1,
              borderColor: 'blue',
              flexGrow: 1,
            }}
            renderItem={({ item }) => <MessageBubble currentUserId={currentUser.id} messageData={item} />}
            ListHeaderComponent={<Text style={styles.introTitle}>This is the start of your conversation</Text>}
            ListFooterComponent={<InputMessage />}
          />

    </View>
    
  ) : 
    (<Text>No Messages!</Text>)
};

export default Conversation;


const styles = StyleSheet.create({
  introTitle: {
    textAlign: 'center',
    paddingVertical: 5,
  }
})