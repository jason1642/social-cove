import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
import RNRestart from 'react-native-restart'; 


const api = axios.create({
  baseURL: 'http://localhost:3000',
})

export const loginUser = async (data: any) =>
  await api.post('/auth/login', data).then(async res => {
    console.log(res.data)
    await AsyncStorage.setItem('authToken', res.data.token).then(r=>console.log(r))
    // console.log(AsyncStorage.getItem('authToken'))
    return res
  }, ({response}) => {
    // console.log(response.data)
    return response.data
  }) 


// export const verifyUser = async () => {
//   const token = await AsyncStorage.getItem('authToken')
//   if (token) {
//     api.defaults.headers.common.authorization = `Bearer ${token}`
//     const response = await api.get('/auth/verify')
//     return response.data
//   }
//   return undefined
// }

export const removeToken = async (user_id?: string) => {

  api.defaults.headers.common.authorization = false;
  await AsyncStorage.setItem('authToken', '')
  RNRestart.Restart();

}