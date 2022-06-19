import * as React from 'react';
import { useState, useEffect } from 'react';
import { makeStyles, Avatar, } from '@rneui/themed'
import {useTheme,useFocusEffect} from '@react-navigation/native'
import { View, Text} from 'react-native'
import Header from '../components/account/Header'
import { showVerboseUserInfo, followUser } from '../api-helpers/users'
import Posts from './current-user-account/Posts'
import AccountOptionButton from '../components/buttons/AccountOptions'
import HeaderSkeleton from '../components/account/HeaderSkeleton'
import PostsGroupSkeleton from '../components/account/PostsGroupSkeleton';
import { RootState } from '../redux/store'
import { useSelector } from 'react-redux'
interface IAccountProps {
  route: any,
  navigation: any,
}

const Account: React.FunctionComponent<IAccountProps> = ({ route, navigation }) => {
  const { user_id} = route.params
  const { colors } = useTheme()
  const styles = useStyles(colors)
  const currentUser = useSelector((state: RootState) => state.user)
  const [userData, setUserData] = useState<any>()
  const [isFollowing, setIsFollowing] = useState<boolean>(false);

  useEffect(() => {
    showVerboseUserInfo(user_id).then(res => {
      // console.log(res.data)
      setUserData(res.data)
      navigation.setOptions({headerTitle: res.data.username})
    })
  }, []);

  useEffect(() => {
    currentUser && userData && 
    setIsFollowing(currentUser.data.following.find(({id}: {id: number})=>id === userData.id) ? true : false)
  }, [currentUser, userData]);


  return (
    <View style={styles.container}>
       <View style={{flex:3, shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
        shadowRadius: 1,
        // elevation: 5,
    borderBottomWidth: 1,
}}>
      {userData ?
        
          <Header navigation={navigation} userData={userData} colors={colors} />
          :
          <HeaderSkeleton />
     
      }

      

        {userData && currentUser.authenticated && userData.id !== currentUser.data.id &&
          <View style={styles.buttonOptions}>
          <AccountOptionButton
            name={isFollowing ? 'Unfollow' : 'Follow'}
          // color='grey'
          buttonProps={{loading: userData ? false : true}}
              buttonFunction={() => {
                followUser(currentUser.data.id, userData.id)
                setIsFollowing(prev=> !prev)
              }}

        />
      <AccountOptionButton
          name='Message'
          buttonProps={{loading: userData ? false : true}}
          buttonFunction={() => navigation.navigate('')}

        />
        
        </View>}
        </View>
      <View style={{ flex: 6 }}>
        
      {userData && userData.posts.length === 0 ? <View style={styles.emptyPosts}><Text style={{textAlign: 'center', fontSize: 20, padding: 10,}}> No posts yet</Text></View> : userData && userData.posts.length > 0 ? <Posts navigation={navigation} userPosts={userData.posts} /> : <PostsGroupSkeleton />}

      </View>
    </View>
  );
};

export default Account;

const useStyles = makeStyles((theme, props:any) => ({
  title: {
    color: props.text,
    paddingVertical: 10,
    fontSize: 18,
  },
  buttonOptions: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 10,
      // backgroundColor: 'red'
  },
  bioLabel: {
    alignSelf: 'flex-start',
    paddingHorizontal: 20,
    color: props.text,
  },
  bio: {
    color: props.text,
    fontSize: 16,
    paddingHorizontal: 20,
    paddingVertical: 2,
    // backgroundColor: 'grey',
    alignSelf: 'flex-start',
  },
  emptyPosts: {
    // borderTopWidth: 1,
    borderColor: 'grey',
   
  },
  container: {
    flex: 1,
    paddingVertical: 15,
    // backgroundColor: 'red'
    // justifyContent: 'flex-start'
  }
}))