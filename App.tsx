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
import Landing from './screens/Landing';
import Feed from './screens/feed/Feed';
import Home from './screens/Home';
import { Alert, Button, useColorScheme } from 'react-native';
import {
  NavigationContainer,
  // DarkTheme,
  DefaultTheme} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Account from './screens/account/Account';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RootState } from './redux/store'
import { useSelector, useDispatch } from 'react-redux';
// import {setUsername } from './redux/features/user/userSlice'
import { ThemeProvider, useThemeMode, Icon } from '@rneui/themed';
import { DarkTheme, LightTheme } from './resources/themes'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



// const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator()



const App = () => {
  const user = useSelector((state: RootState) => state.user.username)
  // Use setColorTheme dispatch to set the theme based on users preference, or system theme
  const colorTheme = useSelector((state: RootState) => state.colorTheme.theme)


  useEffect(() => {
    console.log(user)
    console.log(colorTheme)
  }, [user, colorTheme]);

  return (

    <SafeAreaProvider>

      <NavigationContainer theme={colorTheme === 'dark' ? DarkTheme : LightTheme}>

        <Tab.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#414040',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            // headerShown: false,
          }}>
          {/* <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: 'Overview', headerShown: false }}
          /> */}
          <Tab.Screen
            name="Feed"
            component={Feed}
            options={({ route }: any) => ({
              // headerShown: false,
              // title: route.params.name,r
              tabBarIcon: () => <Icon name='home' type='material-icons' />
            })}
          />
          <Tab.Screen
            name='Account'
            component={Account}
            options={{
              tabBarIcon: () => <Icon name='account-circle' type='material-icons'/>
            }}

          />
          {/* <Stack.Screen
            options={{ headerShown: false }}
            name="Landing"
            component={Landing}
          /> */}
          </Tab.Navigator>
          
      </NavigationContainer>
      </SafeAreaProvider>
  );
};

export default App;
