import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import AsyncStorage from '@react-native-async-storage/async-storage'

const api = axios.create({
  baseURL: 'http://localhost:3000'
})

export const loginUser = createAsyncThunk('user/login',
  async (data: any, thunkAPI) => {
    await axios.post('/auth/login', data).then((res: any) => {
      // console.log(res.data)
    if (res) {
    return {
        data: res.data,
        authenticated: true,
      token: res.token,
        isLoading: false,
    }
  } else {
    return {
        authenticated: false,
        token: undefined,
      data: undefined,
        isLoading: false,
      }
  } 
  })

  
})



export const verifyUser = createAsyncThunk('user/verify', async (thunkAPI) => {
  
    // let token
    const token = await AsyncStorage.getItem('authToken')
      if (token) {
  //     console.log(token)
  // console.log()
      api.defaults.headers.common.authorization = `Bearer ${token}`
      const response = await api.get('/auth/verify')
      // console.log('verifying....')
      // console.log(response.data)
      return response.data.username ?
        { data: response.data, authenticated: true, token: token }
        : { data: undefined, authenticated: false, token: undefined }
    }
    
    
  
  
    
  return undefined
})