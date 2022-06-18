import * as React from 'react';
import { useState, useEffect } from 'react';
import { ScrollView, Text, View, FlatList,  } from 'react-native';
import axios from 'axios'
import { RootState } from '../../redux/store'
import {useSelector} from 'react-redux'
import ConversationCard from '../../components/messenger/ConversationCard'
import { setTokenHeader } from '../../redux/helpers';
import ChatListSkeleton from '../../components/messenger/ChatListSkeleton'
import {useTheme} from '@react-navigation/native'

interface IMessagesDashboardProps {
  navigation: any,
}
const api = axios.create({
  baseURL: 'http://localhost:3000'
})



const MessagesDashboard: React.FunctionComponent<IMessagesDashboardProps> = ({navigation, }) => {
  const [chatList, setChatList] = useState<any>();
  const currentUser = useSelector((state: RootState) => state.user.data)
  const { colors } = useTheme()

  const fetchAllCurrentChats = async () => {
    await setTokenHeader(api)
    await api.get(`/private_chat/${currentUser.id}/all_active_chats`).then(res => {
      console.log(res.data)
      // Filter if object key is equal to current user's username
      
      setChatList(Object.keys(res.data).map((ele, i) => 
        res.data[ele][0]
      ))
    })
  }


  useEffect(() => {
    fetchAllCurrentChats()
  }, [currentUser]);


   useEffect(() => {
     console.log(chatList)
   }, [chatList]);
  return chatList ? (
    <FlatList
      data={chatList}
      renderItem={({ item }) =>
        <ConversationCard
          colors={colors}
          currentUser={currentUser.username}
          chattingWithUsername={currentUser && item.sender.username !== currentUser.username ? item.sender.username : item.recipient.username}
          conversationData={item}
          navigation={navigation}
        />}
    />
   
  ) :
     <ChatListSkeleton />
};

export default MessagesDashboard;
