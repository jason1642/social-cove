import * as React from 'react';
import { useState, useEffect } from 'react';
import { ScrollView, Text } from 'react-native'
import axios from 'axios'
import Card from '../../components/posts/Card'

interface ISubscribedPostsProps {
}

const SubscribedPosts: React.FunctionComponent<ISubscribedPostsProps> = (props) => {
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
      <Text>SUBSCRIBED POSTS</Text>
            {posts && posts.map((ele:any) =>
        <Card key={ele.id} postData={ele} />)}
    </ScrollView>

  );
};

export default SubscribedPosts;
