import { createPost } from '../../api-helpers/posts'


export const onSubmit = async (data: any, user_id: number, setError: any) => {
 
  if (data.image.uri) { 

     const { filename, content_type, uri } = data.image
  const { title, content, image } = data
  const formData = new FormData()
  formData.append('image', {
    uri: image,
    name: filename,
    type: content_type
  })
  console.log(image)
    await createPost({
        image: {
          uri: uri,
          filename: filename,
          content_type: content_type
        },
        title: title,
        content: content,
        user_id: user_id
      })
        .then(res => {
        console.log(res)
        },
          err => console.log(err))

  } else {
    setError('image', { type: 'required', message: 'Please upload an image' }, { shouldFocus: true })

  }
  
}


export const onError = async (err: any) => {
  console.log(err)
}