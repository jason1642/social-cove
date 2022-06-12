import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'

const api = axios.create({
  baseURL: 'http://localhost:3000'
})


export const setTokenHeader = async (api: any) => {
  const token = await AsyncStorage.getItem('authToken')
  console.log(token)
  api.defaults.headers.common.authorization = `Bearer ${token}`
  return token
}



export const createPost = async (data: any) => 
  await api.post('/posts', data).then(res => {
    // console.log(res.data)
  }, err => {
    console.log(data)
    console.log(err)
  })

export const getPopularPosts = async () => 
  await api.get('/posts').then(res => res, err => err)
  



//////////////////////////////////////////////////////////////////////////
/////////////////////        COMMENTS      ///////////////////////////////
//////////////////////////////////////////////////////////////////////////


export const createComment = async (data: any, postId: number) => {
  
  const token = await setTokenHeader(api)
  if (token) {
    return await api.post(`/posts/${postId}/comments`, data)
      .then(res => res,
        err => err)
  } else {
    return {message: 'Authentication Token not found'}
  }
  
}

export const deleteComment = async (commentId: number) => {
  const token = await setTokenHeader(api)
  if (token) {
    return await api.delete(`comments/${commentId}`).then(res => {
      console.log(res.data)
    }, err => {
      console.log(err)
    })
  }
}