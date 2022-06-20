import * as React from 'react';
import { useState, useEffect } from 'react';
import { Text, View, ScrollView } from 'react-native'
import { makeStyles, Avatar, } from '@rneui/themed'
import {useTheme,useFocusEffect} from '@react-navigation/native'

import Guest from './Guest'
import { removeToken } from '../../api-helpers/users'
import Header from '../../components/account/Header'
import AccountOptionButton from '../../components/buttons/AccountOptions'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Posts from './Posts';
import Saved from './Saved';



interface IMainProps {
  navigation: any,
  user: any,
}
const Tab = createMaterialTopTabNavigator();



const Main: React.FunctionComponent<IMainProps> = ({navigation, user}) => {
  const { colors } = useTheme()
  const styles = useStyles(colors)
  const { data, authenticated, isLoading, token } = user
  


  useEffect(() => {
    // data && console.log(data.posts)
    // console.log(data)
  }, [data]);

  return authenticated && !isLoading ? (
    <View style={{flex: 1}}>

        <View style={{flex:3,}}>
       
          <Header navigation={navigation} userData={data} colors={colors} />
          
            <View style={styles.buttonOptions}>
        <AccountOptionButton
          name='Edit Profile'
          color='grey'
          buttonFunction={() => navigation.navigate('EditProfile')}

        />
        <AccountOptionButton
          name='Settings'
          color=''
          buttonFunction={() => navigation.navigate('Settings')}
       
        />
        <AccountOptionButton
          name='Log Out'
          color='darkgrey'
          buttonFunction={() => {
            console.log(data)
            removeToken()
          }}
          
        />
      </View>
           </View>
      
  
      <View style={{flex: 6}}>
        {
          data.posts.length > 1 ? <Posts navigation={navigation} userPosts={data.posts} />
            : <View style={styles.emptyPostContainer}>
              <Text style={styles.emptyPostText}>
                No posts yet
              </Text>
          </View>
        }
       </View>
      
    
      </View>
      )
    : (<Guest navigation={navigation}/> );
};

export default Main;



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
    // flex: 1,
    paddingVertical: 15,
    // backgroundColor: 'red'
    // justifyContent: 'flex-start'
  },
  emptyPostContainer: {
    borderTopWidth: 1,
    borderColor: 'grey',
    marginTop: 5,
  },
  emptyPostText: {
    alignSelf: 'center',
    fontSize: 20,
    padding: 10,
    color: props.text,

  }
}))
