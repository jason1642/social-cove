import * as React from 'react';
import { useState, useEffect } from 'react';
import { Text, View, ScrollView } from 'react-native'
import { makeStyles, Avatar, } from '@rneui/themed'
import {useTheme,useFocusEffect} from '@react-navigation/native'
import { useSelector} from 'react-redux'
import Guest from './Guest'
import { removeToken } from '../../api-helpers/users'
import LogInOutButton from '../../components/buttons/LogInOut'
import Header from '../../components/account/Header'
import { showVerboseUserInfo } from '../../api-helpers/users'
import AccountOptionButton from '../../components/buttons/AccountOptions'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { TabView, SceneMap } from 'react-native-tab-view';
import Posts from './Posts';
import Saved from './Saved';


interface IMainProps {
  navigation: any,
}
const Tab = createMaterialTopTabNavigator();

const renderScene = SceneMap({
  posts: Posts,
  saved: Saved
})

const Main: React.FunctionComponent<IMainProps> = ({navigation}) => {
  const { colors } = useTheme()
  const styles = useStyles(colors)
  const { data, authenticated, token } = useSelector((state: any) => state.user)
  const [userData, setUserData ] = useState()
  const [routes] = React.useState([
    { key: 'posts', title: 'Posts' },
    { key: 'saved', title: 'Saved' },
  ]);
  const [index, setIndex] = React.useState(0);

  useEffect(() => {
  
    showVerboseUserInfo(data.id).then(res => {
      setUserData(res.data)
      // console.log(res.data)
    }, err=> console.log(err))

    console.log(authenticated)

  }, [authenticated]);




  return authenticated ? (
    <View style={{flex: 1}}>
    <ScrollView
      style={styles.container}
    >
      {userData && <Header userData={userData} colors={colors}/>}

      
      <View style={styles.buttonOptions}>
        <AccountOptionButton
          name='Edit Profile'
          color='grey'
          buttonFunction={() => navigation.navigate('Settings')}

        />
        <AccountOptionButton
          name='Insights'
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

      <View style={{flex: 1}}>
          
          <Posts />
          {/* <Tab.Navigator
            
          >
        <Tab.Screen
          
          name='Posts'
          component={Posts}
        />
        <Tab.Screen
          name='Saved'
          component={Saved}
        />
          </Tab.Navigator> */}
      
       </View>
      
      

      </ScrollView>
      </View>
      )
    : (
      <Guest
        navigation={navigation}
      />
  );
};

export default Main;



const useStyles = makeStyles((theme, props:any) => ({
  title: {
    color: props.text,
    paddingVertical: 10,
    fontSize: 18,
  },
  buttonOptions: {
    flex: 1,
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
  }
}))
