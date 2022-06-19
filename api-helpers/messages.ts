import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { setTokenHeader } from './setTokenHeader'
import { responsiveArray } from 'antd/lib/_util/responsiveObserve'


const api = axios.create({
  baseURL: 'http://localhost:3000'
})



export const getAllConversations = async (id: number) => {
  await setTokenHeader(api)
  return await api.get(`/private_chat/${id}/all_active_chats`).then(res => {
    // console.log(res.data)
    // Filter if object key is equal to current user's username
    
      return res.data
  }, err=>console.log(err))
}



export const getOneConversation = async (senderId: number, recipientId: number) => {
  await setTokenHeader(api)
  return await api.post('/private_chat/conversation', {
    sender_id: senderId,
    recipient_id: recipientId
  }).then(res => {
    // console.log(res.data)
    return res.data
  },err=>console.log(err))
}



// export const sendMessage = async () => 
  

