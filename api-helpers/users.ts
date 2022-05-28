import axios from 'axios'



const api = axios.create({
  baseURL: 'http://localhost:3000',
})

export const loginUser = async (data: any) =>
  await api.post('/auth/login', data).then(res => {
    console.log(res)
    return res
  }, ({response}) => {
    console.log(response.data)
    return response.data
  }) 
