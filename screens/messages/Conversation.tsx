import * as React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios'
import { RootState } from '../../redux/store'
import {useSelector} from 'react-redux'
import { ScrollView, View, Text, FlatList, StyleSheet,  } from 'react-native';
import MessageBubble from '../../components/messenger/MessageBubble';
import InputMessage from '../../components/messenger/InputMessage';
import { makeStyles } from '@rneui/themed'
import {useTheme,useFocusEffect} from '@react-navigation/native'
import { getOneConversation } from '../../api-helpers/messages'

interface IConversationProps {
  navigation: any,
  route: any,
  
}

const ws = new WebSocket('ws://localhost:3000')

const Conversation: React.FunctionComponent<IConversationProps> = ({  navigation, route }) => {
  const { recipient_id } = route.params
  const { colors } = useTheme()
  const [ recipient, setRecipient] = useState<any>()
  const [currentChat, setCurrentChat] = useState<any>();
  const currentUser = useSelector((state: RootState)=> state.user.data)
  const styles = useStyles(colors)

  useEffect(() => {

    getOneConversation(recipient_id, currentUser.id).then(res => {
      setRecipient(res[0].sender.id !== currentUser.id ? res[0].sender : res[0].recipient)
      setCurrentChat(res)
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
              height: '100%',
              borderColor: 'blue',
            }}
        // inverted={true}
        renderItem={({ item }) => <MessageBubble colors={colors} currentUserId={currentUser.id} messageData={item} />}
            ListHeaderComponent={<Text style={styles.introTitle}>This is the start of your conversation</Text>}
            // ListFooterComponent={}
          />
      <InputMessage recipient={recipient} currentUser={currentUser} />
    </View>
    
  ) : 
    (<Text>No Messages Yet</Text>)
};

export default Conversation;


const useStyles = makeStyles((theme, props: any) => ({
  introTitle: {
    textAlign: 'center',
    paddingVertical: 5,
    color: props.text,
  }
}))