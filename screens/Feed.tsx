import * as React from 'react';
import { useState, useEffect, useLayoutEffect } from 'react';
import axios from 'axios'
import { Text, ScrollView, Button } from 'react-native'
import Card from '../components/posts/Card'
interface IFeedProps {
  route: any,
  navigation: any,
}



const Feed: React.FunctionComponent<IFeedProps> = ({ route, navigation }) => {
  const [count, setCount] = useState(0);
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
    if (route.params) {
      // Post updated, do something with `route.params.post`
      // For example, send the post to the server
      // console.log(route)

    }

    fetchPosts()
    
  }, [route.params]);

  useEffect(() => {
    // console.log(posts)
  }, [posts]);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={()=> setCount(c=>c + 1)} title="Update count" />
      )
    })
  },[])
  return (
    <ScrollView>
      <Text>This is the FEED</Text>
      <Text>{count}</Text>



      {posts && posts.map((ele:any) =>
        <Card key={ele.id} postData={ele} />)}
      



      {/* <Button 
        title="Back Home"
        onPress={() => navigation.navigate('Home')}
      />
      <Button 
        title="Update the title"
        onPress={() => navigation.setOptions({ title: 'Updated' })}
      /> */}
    </ScrollView>
  );
};

export default Feed;
