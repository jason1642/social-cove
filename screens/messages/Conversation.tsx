import * as React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios'
import { RootState } from '../../redux/store'
import {useSelector} from 'react-redux'
import { ScrollView, Text, FlatList,  } from 'react-native';



interface IConversationProps {
  navigation: any,
  route: any,
}

const Conversation: React.FunctionComponent<IConversationProps> = ({ navigation, route }) => {
  const {recipient_id} = route.params
  const [currentChat, setCurrentChat] = useState();
  const currentUser = useSelector((state: RootState)=> state.user)

  useEffect(() => {
    axios.post('http://localhost:3000/private_chat/conversation', {
      sender_id: 2,
      recipient_id: recipient_id
    }).then(res => {
      // console.log(res.data)
      setCurrentChat(res.data)
    })
  }, [recipient_id])

  return currentChat ? (
    <FlatList
      data={currentChat}
      renderItem={({ item }) => <Text>{item.content}</Text>}
    />
  ) : 
    (<Text>No Messages!</Text>)
};

export default Conversation;
