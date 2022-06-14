import * as React from 'react';
import { useState, useEffect } from 'react';
import { Text, View, ScrollView, FlatList } from 'react-native'
import axios from 'axios'
import { makeStyles, Divider } from '@rneui/themed';
import { useTheme } from '@react-navigation/native'
import Header from '../components/posts/info-page/Header';
import MainImage from '../components/posts/info-page/MainImage'
import Body from '../components/posts/info-page/Body';
import Card from '../components/comment/Card'
import Input from '../components/comment/Input'


interface IPostProps {
  postData: any, 
  route: any,
  navigation: any,
} 

const Post: React.FunctionComponent<IPostProps> = ({ route, navigation }) => {
  const { postId } = route.params
  const { colors } = useTheme()
  const [postData, setPostData] = useState<any>()
  const [addedComment, setAddedComment ] = useState<number>(0)
  const [isRefreshing, setIsRefreshing] = useState(false);
  const styles = useStyles(colors)


  const fetchPostData = async () => {
    await axios.get(`http://localhost:3000/posts/${postId}`).then(res => {
      setPostData(res.data)
      // console.log(res.data.comments.map(ele=> ele.id))
    }, err=> console.log(err))
  } 
  
  useEffect(() => {
    fetchPostData()
    setIsRefreshing(false)
    
  }, [addedComment, postId]); 

  const addedCommentIndicator = () => {
    setAddedComment(prev => prev + 1)
  }
  const UpperBodyComponents = postData && <>
  <Header
          navigation={navigation}
          colors={colors}
          postData={postData}
        />
        <MainImage imageUrl={postData.image_url}/>
    <View style={{padding: 10}}>
      <Body
          colors={colors}
        postData={postData}
        navigation={navigation}
        />
        <Divider
        style={styles.divider}
          width={1}
    />
          <Text style={styles.title}>{postData.comments.length} Comment(s)</Text>
    <Input addedCommentIndicator={addedCommentIndicator} postId={postId} />
        </View>
        
    

  </>


  return postData ?
    (<FlatList
      refreshing={isRefreshing}
      onRefresh={() => {
        
        console.log('Refreshed page!', addedComment)
        setIsRefreshing(true)
        setIsRefreshing(false)

      }}
     
      style={styles.container}
          data={postData.comments}
          renderItem={({ item }) => <Card navigation={navigation} key={item.key} colors={colors} commentData={item} />}
          ListHeaderComponent={UpperBodyComponents}
        />)
        :
        <View>
          <Text>Can't load post data</Text>
        </View>
    }
    // </ScrollView>
  


export default Post;



const useStyles = makeStyles((theme, props:any) => ({
  title: {
    color: props.text,
    marginVertical: 5,
  },
  container: {
    paddingVertical: 5,
  },
  divider: {
    width: '98%',
    marginVertical: 5,
    alignSelf: 'center'
  }
}))