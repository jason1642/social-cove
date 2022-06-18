/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import * as React from 'react';
import { useState, useEffect } from 'react';
import Landing from './screens/landing/Landing';
import Feed from './screens/feed/Feed';
import Home from './screens/Home';
import { Alert, Button, useColorScheme, View, ScrollView, StyleSheet } from 'react-native';
import {
  NavigationContainer,
  // DarkTheme,
  DefaultTheme
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Account from './screens/current-user-account/Account';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RootState } from './redux/store'
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles, Icon, Avatar} from '@rneui/themed';
import { DarkTheme, LightTheme } from './resources/themes'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CreatePost from './screens/CreatePost'
import {verifyUser} from './redux/actions/userActions'
import {useTheme} from '@react-navigation/native'
import MainMessagesOverview from './screens/messages/MessagesDashboard';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator()


const App = () => {
  const user = useSelector((state: RootState) => state.user)
  // Use setColorTheme dispatch to set the theme based on users preference, or system theme
  const colorTheme = useSelector((state: RootState) => state.colorTheme.theme)
  const dispatch = useDispatch()
  const { colors } = useTheme()
  const styles = useStyles(colors)


  useEffect(() => {
    dispatch(verifyUser())
    
  }, []);
  return (

    <SafeAreaProvider>

      <NavigationContainer theme={colorTheme === 'dark' ? DarkTheme : LightTheme}>
        <Stack.Navigator
          screenOptions={({ navigation })=> ({
            // headerShown: false,
          })}>
          {!user.isLoading && !user.authenticated &&
            <Stack.Screen
              name='Landing'
              component={Landing}
            />
          }
          
          <Stack.Screen
            options={({ navigation }) => ({
              headerShown: false,
              // headerRight: ()=> (<Button onPress={()=>navigation.push('Messages Dashboard', )} title='Messages' />)
            })}
            name='Home'>
            { ({navigation})=> <Tab.Navigator
              screenOptions={{
                headerStyle: {
                  backgroundColor: '#84b4dd',
                },
                headerTintColor: '#282331',
                headerTitleStyle: {
                  fontWeight: 'bold',
                  
                },
                
                tabBarActiveTintColor: 'blue',
                tabBarLabelStyle: {color: colorTheme === 'dark' ? '#e7e7e7' : 'black'},
                headerShown: false
              }}>
                    <Tab.Screen
                      name="Feed"
                      component={Feed}
                      options={() => ({
                        tabBarIcon: () => <Icon name='home' type='material-icons' />,
                      })}
              />
              
                   <Tab.Screen
                      name='Create Post'
                     
                      options={{
                        tabBarIcon: () => <Icon name='add-circle' type='material-icons' />,
                        headerShown: true,
                        // headerTitleStyle: { color: colors.text},
                        headerTitleAlign: 'left'
                        
                      }}
                      initialParams={{user_id: user.data ? user.data.id : null}}
              >
                {
                  ({ route }) => user.data
                    ?
                    <CreatePost route={route} />
                    :
                    <Landing title='To create a post, you must first be logged in' />
                  }
                    </Tab.Screen>

     
                 <Tab.Screen
                  name='Current User Account'
                  options={{
                    tabBarIcon: () => <Avatar
                      size={30}
                      icon={{ name: 'account-circle', type: 'material-icons' }}
                      rounded
                      source={{ uri: user.data && user.data.profile_picture_url }}
                      avatarStyle={styles.profile_picture}
                    />,
                    title: user.data ? user.data.username : 'Account',
                    headerTitleAlign: 'left',
                    headerShown: true,
                    headerTitleStyle: {
                      fontSize: 22
                    }
                  }}
                >
                  {({navigation})=><Account navigation={navigation} user={user}/>}
                  </Tab.Screen>
              
                  </Tab.Navigator>}
            
                </Stack.Screen>
          <Stack.Screen
            name='Messages Dashboard'
            component={MainMessagesOverview}
          />

           </Stack.Navigator>
      </NavigationContainer>
      </SafeAreaProvider>
  );
};

export default App;
const useStyles = makeStyles((theme, props:any) => ({
  
  profile_picture: { 
    alignSelf: 'center',
    backgroundColor: 'orange',
  },
  tabBarLabel: {
    color: props.text,
  }
}))