import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const loginUser = createAsyncThunk('user/login',
  async (data: any, thunkAPI) => {
  const requestData: any = await axios.post('http://localhost:3000/auth/login', data)
  console.log(requestData)
  if (requestData) {
    return {
        data: requestData.data,
        authenticated: true,
        token: requestData.token
    }
  } else {
    return {
        authenticated: false,
        token: undefined,
        data: undefined,
      }
  } 
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