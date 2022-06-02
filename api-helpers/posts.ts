import axios from 'axios'
import Post from '../screens/Post'

const api = axios.create({
  baseURL: 'http://localhost:3000'
})

export const createPost = async (data: any) => 
  await api.post('/posts', data).then(res => {
    console.log(res.data)
  }, err => {
    console.log(data)
    console.log(err)
  })

export const getPopularPosts = async () => 
  await api.get('/posts').then(res=>res,err=>err)