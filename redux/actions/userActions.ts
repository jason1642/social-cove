import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const loginUser = createAsyncThunk('user/login',
  async (data: any, thunkAPI) => {
    await axios.post('http://localhost:3000/auth/login', data).then(res => {
      // console.log(res.data)
    if (res) {
    return {
        data: res.data,
        authenticated: true,
        token: res.token
    }
  } else {
    return {
        authenticated: false,
        token: undefined,
        data: undefined,
      }
  } 
  })

  
})



// export const loginUser = async (data: any) => {
//   const requestData = await axios.post('http://localhost:3000/auth/login', data)
//   if (requestData) {
//     return {
//       type: LOGIN_USER,
//       payload: requestData
//     }
//   } else {
//     return {
//       type: LOGIN_ERROR,
//       payload: {message: 'There was an error logging in'}
//   }
//   }
// }