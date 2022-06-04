import * as React from 'react';
import { useState, useEffect } from 'react';
import { Text, View, ScrollView } from 'react-native'
import axios from 'axios'
import { makeStyles, Divider } from '@rneui/themed';
import { useTheme } from '@react-navigation/native'
import Header from '../components/posts/info-page/Header';
import MainImage from '../components/posts/info-page/MainImage'
import Body from '../components/posts/info-page/Body';
import CommentSection from '../components/comment/Section'

interface IPostProps {
  postData: any, 
  route: any,
  navigation: any,
} 

const Post: React.FunctionComponent<IPostProps> = ({ route, navigation }) => {
  const { postId } = route.params
  const { colors } = useTheme()
  const [postData, setPostData] = useState<any>()
  const styles = useStyles(colors)


  const fetchPostData = async () => {
    await axios.get(`http://localhost:3000/posts/${postId}`).then(res => {
      setPostData(res.data)
      // console.log(res.data.image)
    }, err=> console.log(err))
  } 
  
  useEffect(() => {
    // console.log(postId)

    fetchPostData()
 

  }, [postId]); 
  return (
    <ScrollView>
      { postData ?<>
        <Header
          colors={colors}
          postData={postData}
        />
        <MainImage imageUrl={postData.image_url}/>
        <Body
          colors={colors}
          postData={postData}
        />
        <Divider
          style={{width: '95%', alignSelf: 'center'}}
          width={1}
        />
        <CommentSection
          navigation={navigation}
          colors={colors}
          commentArray={postData.comments}
          />
      </>
        :
        <View>
          <Text>Can't load post data</Text>
        </View>
    }
    </ScrollView>
  );
};

export default Post;



const useStyles = makeStyles((theme, props:any) => ({
  title: {
    color: props.text
  }
}))