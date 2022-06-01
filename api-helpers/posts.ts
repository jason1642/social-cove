import axios from 'axios'
import Post from '../screens/Post'

const api = axios.create({
  baseURL: 'http://localhost:3000'
})

export const createPost = async (data: any) => 
  await api.post('/posts', data).then(res => {
    console.log(res)
  }, err => {
    console.log(data)
    console.log(err)
  })