import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
import RNRestart from 'react-native-restart'; 
import { ApiOutlined } from '@ant-design/icons';


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


export const registerUser = async (data: any) => 
  await api.post('/users', data).then(res => {
    console.log(res)
    return res
  }, err => {
    console.log(err) 
    return err
  })

export const removeToken = async (user_id?: string) => {

  api.defaults.headers.common.authorization = false;
  await AsyncStorage.setItem('authToken', '')
  RNRestart.Restart();

}