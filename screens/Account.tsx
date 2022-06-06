import * as React from 'react';
import { useState, useEffect } from 'react';
import { makeStyles, Avatar, } from '@rneui/themed'
import {useTheme,useFocusEffect} from '@react-navigation/native'
import { StyleSheet, Text, View, } from 'react-native'
import Header from '../components/account/Header'
import { showVerboseUserInfo } from '../api-helpers/users'
import Posts from './current-user-account/Posts'
import AccountOptionButton from '../components/buttons/AccountOptions'
import HeaderSkeleton from '../components/account/HeaderSkeleton'
import PostsGroupSkeleton from '../components/account/PostsGroupSkeleton';

interface IAccountProps {
  route: any,
  navigation: any,
}

const Account: React.FunctionComponent<IAccountProps> = ({ route, navigation }) => {
  const { user_id} = route.params
  const { colors } = useTheme()
  const styles = useStyles(colors)

  const [userData, setUserData] = useState<any>()

  useEffect(() => {
    
    showVerboseUserInfo(user_id).then(res => {
      // console.log(res.data)
      setUserData(res.data)
      navigation.setOptions({headerTitle: res.data.username})
    })
  }, []);
  return (
    <View style={styles.container}>
       <View style={{flex:3,}}>
      {userData ?
        
        <Header userData={userData} colors={colors} />
          :
          <HeaderSkeleton />
     
      }

      

      <View style={styles.buttonOptions}>
      <AccountOptionButton
          name='Follow'
          // color='grey'
          buttonProps={{loading: userData ? false : true}}
          buttonFunction={() => navigation.navigate('')}

        />
      <AccountOptionButton
          name='Message'
          buttonProps={{loading: userData ? false : true}}
          buttonFunction={() => navigation.navigate('')}

        />
        
        </View>
        </View>
      <View style={{ flex: 6 }}>
        
      {userData ? <Posts navigation={navigation} userPosts={userData.posts} /> : <PostsGroupSkeleton />}

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
  container: {
    flex: 1,
    paddingVertical: 15,
    // backgroundColor: 'red'
    // justifyContent: 'flex-start'
  }
}))