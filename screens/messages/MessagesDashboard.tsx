import * as React from 'react';
import { useState, useEffect } from 'react';
import { ScrollView, Text, View, FlatList, TextInput,  } from 'react-native';
import axios from 'axios'
import { RootState } from '../../redux/store'
import {useSelector} from 'react-redux'
import ConversationCard from '../../components/messenger/ConversationCard'
import { setTokenHeader } from '../../redux/helpers';
import ChatListSkeleton from '../../components/messenger/ChatListSkeleton'
import {useTheme} from '@react-navigation/native'
import { getAllConversations } from '../../api-helpers/messages'
import { makeStyles } from '@rneui/themed'

interface IMessagesDashboardProps {
  navigation: any,
}




const MessagesDashboard: React.FunctionComponent<IMessagesDashboardProps> = ({navigation, }) => {
  const [chatList, setChatList] = useState<any>();
  const currentUser = useSelector((state: RootState) => state.user.data)
  const { colors } = useTheme()
  
  const styles = useStyles(colors)
  


  useEffect(() => {

    getAllConversations(currentUser.id).then((res:any) => {
      
      setChatList(Object.keys(res).map((ele, i) => 
        res[ele][0]
      ))
    })


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
          chattingWithUserData={currentUser && item.sender.username !== currentUser.username ? item.sender : item.recipient}
          conversationData={item}
          navigation={navigation}
        />}
      ListHeaderComponent={
        <View style={styles.searchBarContainer}>
          <TextInput placeholderTextColor={'white'} placeholder='Search' style={styles.searchBarPlaceHolder}></TextInput>
        </View>}
    />
   
  ) :
     <ChatListSkeleton />
};

export default MessagesDashboard;

const useStyles = makeStyles((theme, props: any) => ({
  container: {
    
  },
  searchBarContainer: { 
    padding: 8,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 8,
  },
  searchBarPlaceHolder: {
    color: props.text,
    fontSize: 16,
  }
}))