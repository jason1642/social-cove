import * as React from 'react';
import { useState, useEffect } from 'react';
import { ScrollView, Text, FlatList,  } from 'react-native';
import axios from 'axios'
import { current } from '@reduxjs/toolkit';
interface IMessagesDashboardProps {
}

const MessagesDashboard: React.FunctionComponent<IMessagesDashboardProps> = (props) => {
  const [currentChat, setCurrentChat] = useState();

  useEffect(() => {
    axios.post('http://localhost:3000/private_chat/conversation', {
      sender_id: 2,
      recipient_id: 5
    }).then(res => {
      console.log(res.data)
      setCurrentChat(res.data)
    })
  }, [])
  return currentChat ? (
    <FlatList
      data={currentChat}
      renderItem={({ item }) => <Text>{item.content}</Text>}
    />
  ) : 
    (<Text>No Messages!</Text>)
};

export default MessagesDashboard;
