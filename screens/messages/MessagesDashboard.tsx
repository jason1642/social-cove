import * as React from 'react';
import { useState, useEffect } from 'react';
import { ScrollView, Text, View, FlatList,  } from 'react-native';
import axios from 'axios'
import { RootState } from '../../redux/store'
import {useSelector} from 'react-redux'
import ConversationCard from '../../components/messenger/ConversationCard'
import { setTokenHeader } from '../../redux/helpers';

interface IMessagesDashboardProps {
  navigation: any,
}
const api = axios.create({
  baseURL: 'http://localhost:3000'
})



const MessagesDashboard: React.FunctionComponent<IMessagesDashboardProps> = ({navigation, }) => {
  const [chatList, setChatList] = useState<any>();
  const currentUser = useSelector((state: RootState) => state.user.data)

  const fetchAllCurrentChats = async () => {
    await setTokenHeader(api)
    await api.get(`/private_chat/${currentUser.id}/all_active_chats`).then(res => {
      console.log(res.data)
      // Filter if object key is equal to current user's username
      const filteredChats = Object.keys(res.data).filter((e: string) => e !== currentUser.username)
      console.log(filteredChats)
      setChatList(filteredChats.map((ele, i) => 
        res.data[ele][0]
      ))
    })
  }


  useEffect(() => {
    fetchAllCurrentChats()
  }, [currentUser]);
  return chatList ? (
    <FlatList
      data={chatList}
      renderItem={({item})=> <ConversationCard conversationData={item} navigation={navigation} />}
    />
   
  ) :
     <Text> No active conversations</Text>
};

export default MessagesDashboard;
