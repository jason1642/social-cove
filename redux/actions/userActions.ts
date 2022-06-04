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
      } else {
        return { data: undefined, authenticated: false, token: undefined }
    }
  
})



export const editUser = createAsyncThunk('user/edit', async (data: any, thunkAPI: any) => {
  

  if (data.profile_picture.uri) {

    const { filename, content_type, uri } = data.profile_picture
    const { username, bio, email, user_id} = data
    const formData = {
      profile_picture: {
        uri: uri,
        filename: filename,
        content_type: content_type
      },
      username: username,
      bio: bio,
      email: email,
    }
    await api.put(`users/${user_id}`, formData).then((res: any) => {
      console.log(res.data)
      if (!res.error) {
        return {}
      } else {
        return ({ erorr: res.error })
      }
    
    }, err => {
      console.log(err)
      return ({ error: 'something went wrong' })
    })
 
  }


}
)