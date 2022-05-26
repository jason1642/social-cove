import * as React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native'
import Card from '../../components/posts/Card'
import axios from 'axios'
interface IPopularProps {
}

const Popular: React.FunctionComponent<IPopularProps> = (props) => {
  const [posts, setPosts ] = useState([])


  const fetchPosts = async () => {
    await axios.get('http://localhost:3000/posts').then(res => {
       // console.log(res)
       setPosts(res.data)
    },
      err => console.log(err)
    )
   }
  useEffect(() => {
    fetchPosts()

  }, []);
  return (
    <ScrollView>
      
      {posts && posts.map((ele:any) =>
        <Card key={ele.id} postData={ele} />)}
      
    </ScrollView>
  );
};

export default Popular;
