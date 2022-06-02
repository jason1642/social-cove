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
import { Alert, Button, useColorScheme, View, ScrollView } from 'react-native';
import {
  NavigationContainer,
  // DarkTheme,
  DefaultTheme} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Account from './screens/current-user-account/Account';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RootState } from './redux/store'
import { useSelector, useDispatch } from 'react-redux';
// import {setUsername } from './redux/features/user/userSlice'
import { ThemeProvider, useThemeMode, Icon } from '@rneui/themed';
import { DarkTheme, LightTheme } from './resources/themes'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CreatePost from './screens/CreatePost'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {verifyUser} from './redux/actions/userActions'
// import { verifyUser } from './api-helpers/users';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator()
const retrieveToken = async () => {
  const myToken = await AsyncStorage.getItem('authToken')
  console.log(myToken)
}

const App = () => {
  const user = useSelector((state: RootState) => state.user)
  // Use setColorTheme dispatch to set the theme based on users preference, or system theme
  const colorTheme = useSelector((state: RootState) => state.colorTheme.theme)
  const dispatch = useDispatch()

  useEffect(() => {
    // console.log('Loading status - ', user.isLoading)
    console.log(user)
  }, [user.isLoading]);

  useEffect(() => {
    dispatch(verifyUser())
    
  }, []);
  return (

    <SafeAreaProvider>

      <NavigationContainer theme={colorTheme === 'dark' ? DarkTheme : LightTheme}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          {!user.isLoading && !user.authenticated &&
            <Stack.Screen
              name='Landing'
              component={Landing}
          />}
          
              <Stack.Screen name='Home'>
            { props=> <Tab.Navigator
                    screenOptions={{
                      headerStyle: {
                      backgroundColor: '#414040',
                      },
                      headerTintColor: '#fff',
                      headerTitleStyle: {
                        fontWeight: 'bold',
                      },}}>
                    <Tab.Screen
                      name="Feed"
                      component={Feed}
                      options={() => ({
                        tabBarIcon: () => <Icon name='home' type='material-icons' />
                      })}
                    />
                    { user.data.id && <Tab.Screen
                      name='Create Post'
                      component={CreatePost}
                      options={{
                        tabBarIcon: () => <Icon name='add-circle' type='material-icons' />
                      }}
                      initialParams={{user_id: user.data.id}}
                      />}

     
                    <Tab.Screen
                      name='Account'
                      component={Account}
                      options={{
                        tabBarIcon: () => <Icon name='account-circle' type='material-icons' />,
                        title: user.data ? user.data.username : 'Account',
                        headerTitleAlign: 'left',
                        headerTitleStyle: {paddingLeft: 15,fontWeight: 'bold', fontSize: 22}
                      }}

                    />
                    {/* <Stack.Screen
            options={{ headerShown: false }}
            name="Landing"
            component={Landing}
          /> */}
                  </Tab.Navigator>}
            
                </Stack.Screen>
                  
                
           
            
       
           </Stack.Navigator>
      </NavigationContainer>
      </SafeAreaProvider>
  );
};

export default App;
