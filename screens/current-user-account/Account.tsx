import * as React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from '../Register'
import Main from './Main'
import Login from '../Login'
import Settings from './Settings'
import Post from '../Post';
import EditProfile from './EditProfile'
import { Avatar } from '@rneui/themed'
import { RootState } from '../../redux/store';
import { useSelector} from 'react-redux'
import Landing from '../landing/Landing';


interface IAccountProps { 
  navigation?: any,
  user: any,
}
const AccountStack = createNativeStackNavigator()


const Account: React.FunctionComponent<IAccountProps> = ({navigation}) => {
  const user = useSelector((state: RootState) => state.user)
  

  useEffect(() => {
    
    user.data && navigation.setOptions({
     headerTitle: user.data.username,
     tabBarIcon:()=> <Avatar
     size={30}
     icon={{name:'account-circle', type:'material-icons'}}
       rounded
       
     source={{ uri: user.data.profile_picture_url }}
     avatarStyle={styles.profile_picture}
   />})

    console.log(user) 
  }, [user]);
  return user.data && !user.isLoading ? (

    <AccountStack.Navigator>
      <AccountStack.Group>
        <AccountStack.Screen
          name='Main'
          options={{ headerShown: false, }}
        >
          {({ navigation }) => <Main navigation={navigation} user={user} />}
        </AccountStack.Screen>

        <AccountStack.Screen
          name='Post Info'
          component={Post}
        />
        <AccountStack.Screen
          name='Settings'
          component={Settings}
        />
        <AccountStack.Screen
          name='EditProfile'
          component={EditProfile}
        />
      </AccountStack.Group>

  
      <AccountStack.Group screenOptions={{ presentation: 'modal' }}>
        <AccountStack.Screen options={{ headerTitle: 'Register' }} name="RegisterModal" component={Register} />
        <AccountStack.Screen options={{ headerTitle: 'Login' }} name="LoginModal" component={Login} />
      </AccountStack.Group>

    </AccountStack.Navigator>
  ) : <Landing title="Create an account today to have access to all of Social Cove's features" />
};


export default Account;
const styles = StyleSheet.create({
  profile_picture: { 
    alignSelf: 'center',
    backgroundColor: 'green',
  }
})