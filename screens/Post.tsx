import * as React from 'react';
import { useState, useEffect } from 'react';
import { Text, View, ScrollView } from 'react-native'
import axios from 'axios'
import { makeStyles } from '@rneui/themed';
import { useTheme } from '@react-navigation/native'

interface IPostProps {
  postData: any,
  route: any,
}

const Post: React.FunctionComponent<IPostProps> = ({ route }) => {
  const { postId } = route.params
  const { colors } = useTheme()
  const [postData, setPostData] = useState()
  const styles = useStyles(colors)
  const fetchPostData = async () => {
    await axios.get(`http://localhost:3000/posts/${postId}`).then(res => {
      setPostData(res.data)
      console.log(res.data)
    }, err=> console.log(err))
  } 
  
  useEffect(() => {
    console.log(postId)

    fetchPostData()


  }, [postId]);
  return (
    <ScrollView>
      <Text style={styles.title}>This is the post info page that you clicked on</Text>
    </ScrollView>
  );
};

export default Post;



const useStyles = makeStyles((theme, props:any) => ({
  title: {
    color: props.text
  }
}))