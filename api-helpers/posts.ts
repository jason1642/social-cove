import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3000'
})

export const createPost = async (data: any) => 
  await api.post('/posts', data).then(res => {
    // console.log(res.data)
  }, err => {
    console.log(data)
    console.log(err)
  })

export const getPopularPosts = async () => 
  await api.get('/posts').then(res => res, err => err)
  

export const createComment = async (data: any, post_id: number) => 
  await api.post(`/posts/${post_id}/comments`, data).then(res=>res,err=>err)