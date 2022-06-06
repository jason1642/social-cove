import * as React from 'react';
import { useState, useEffect } from 'react';
import { makeStyles, Avatar, } from '@rneui/themed'
import {useTheme,useFocusEffect} from '@react-navigation/native'
import { StyleSheet, Text, View, } from 'react-native'
import Header from '../components/account/Header'
import Posts from './current-user-account/Posts'
import AccountOptionButton from '../components/buttons/AccountOptions'
import { useSelector } from 'react-redux'


import { RootState } from '../redux/store'

interface IAccountProps {
  route: any,
  navigation: any,
}

const Account: React.FunctionComponent<IAccountProps> = ({ route, navigation }) => {
  const { user_id } = route.params
  const { colors } = useTheme()
  const styles = useStyles(colors)
  const user = useSelector((state: RootState ) => state.user)
  const [userData, setUserData] = useState<any>()


  return (
    <View style={styles.container}>
       <View style={{flex:3,}}>
      {userData &&
        <>
        <Header userData={userData} colors={colors} />
              {/* <Text style={styles.title}>
                This is another users account, or even the current user {user_id}
              </Text> */}
        </>
     
      }

      

      <View style={styles.buttonOptions}>
      <AccountOptionButton
          name='Follow'
          // color='grey'
          buttonFunction={() => navigation.navigate('')}

        />
      <AccountOptionButton
          name='Follow'
          // color='grey'
          buttonFunction={() => navigation.navigate('')}

        />
        
        </View>
        </View>
      <View style={{ flex: 6 }}>
        
      {userData && <Posts navigation={navigation} userPosts={userData.posts} />}

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
  },
  profile_picture: { 
    alignSelf: 'center',
    backgroundColor: 'green',
  }
}))