import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
import RNRestart from 'react-native-restart'


const api = axios.create({
  baseURL: 'http://localhost:3000',
})




export const loginUser = async (data: any) =>
  await api.post('/auth/login', data).then(async res => {
    // console.log(res.data)
    await AsyncStorage.setItem('authToken', res.data.token).then(r=>console.log(r))
    // console.log(AsyncStorage.getItem('authToken'))
    return res
  }, ({response}) => {
    // console.log(response.data)
    return response.data
  }) 


export const registerUser = async (data: any) => 
  await api.post('/users', data).then(res => {
    console.log(res.data)
    return res
  }, err => {
    console.log(err) 
    return err
  })


// Returns full list of follwers, following, and posts
export const showVerboseUserInfo = async (user_id: number) => 
  await api.get(`/users/${user_id}/verbose_info`).then(res=>res,err=>err)


export const removeToken = async (user_id?: string) => {

  api.defaults.headers.common.authorization = false;
  await AsyncStorage.setItem('authToken', '')
  RNRestart.Restart();

}



export const getFollowList = async (userId: number, method: string) => {
  return await api.get(`users/${userId}/${method}`).then(res => {
    console.log(res.data)
    return res.data
  }, err => {
    return err
    console.log(err)
  })
}




export const followUser = async (currentUserId: number, userToFollowId: number) => 
  await api.post('/users/follow', {
    followed_id: userToFollowId, follower_id: currentUserId
  }).then(res => {
    console.log(res.data)
    return res
  }, err => err)