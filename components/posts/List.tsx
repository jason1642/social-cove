import * as React from 'react';
import { useState, useEffect } from 'react';
import { ScrollView, Text, View,  } from 'react-native'
import { Button } from '@rneui/base';
import Card from './Card'
import axios from 'axios'


interface IListProps {
  navigation: any,
  postArray: any,
}

const List: React.FunctionComponent<IListProps> = ({ navigation }) => {
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

  return posts ? (
    <ScrollView >
      {
         posts.map((ele: any) =>
          <Button key={ele.id} onPress={() =>
            navigation.navigate('Post Info',
              {
                postId: ele.id
              })}>
            <Card postData={ele} />
            </Button>
            )
      }
    </ScrollView>
  ) :
    <View>
      <Text>Still waiting to load posts</Text>
    </View>
};

export default List;
