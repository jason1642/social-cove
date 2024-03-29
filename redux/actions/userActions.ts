import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
// import AsyncStorage from '@react-native-async-storage/async-storage'
import { setTokenHeader } from '../helpers'
const api = axios.create({
  baseURL: 'http://localhost:3000'
})

export const loginUser = createAsyncThunk('user/login',
  async (data: any, thunkAPI) => 
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

  
)



export const verifyUser = createAsyncThunk('user/verify', async (thunkAPI) => {
  
    // let token
  const token = await setTokenHeader(api)
  

  console.log(token)
  if (token) {
        console.log('verifying....')
    return await api.get('/auth/verify/verbose-info').then(res => {
          // console.log(res.data)
        return res.data.username ?
        {data: res.data, authenticated: true}
        : { data: undefined, authenticated: false, token: undefined }
      })
      
      } else {
        return { data: undefined, authenticated: false, token: undefined }
    }
  
})



export const editUser = createAsyncThunk('user/edit', async (data: any, thunkAPI: any) => {
  
  const token = await setTokenHeader(api)
  if (token) {

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
   return await api.put(`users/${user_id}`, formData).then((res: any) => {
      
     if (!res.error) {
        // console.log(res.data.profile_picture_url)
        return ({ ...res.data })
        
      } else {
        return ({ error: res.error })
      }
    
    }, err => {
      console.log(err)
      return ({ error: 'something went wrong' })
    })
 
  }


}
)