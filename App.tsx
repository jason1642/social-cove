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
import { ThemeProvider, useThemeMode } from '@rneui/themed';
import { DarkTheme, LightTheme } from './resources/themes'




const Stack = createNativeStackNavigator();




const App = () => {
  const user = useSelector((state: RootState) => state.user.username)
  // Use setColorTheme dispatch to set the theme based on users preference, or system theme
  const colorTheme = useSelector((state: RootState) => state.colorTheme.theme)


  useEffect(() => {
    console.log(user)
    console.log(colorTheme)
  }, [user, colorTheme]);

  return (
    // <ThemeProvider theme={theme}>

    <SafeAreaProvider>

      <NavigationContainer theme={colorTheme === 'dark' ? DarkTheme : LightTheme}>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#65badf',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerShown: false,
          }}>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: 'Overview', headerShown: false }}
          />
          {/* <Stack.Screen name="Account" component={Account} /> */}
          <Stack.Screen
            name="Feed"
            component={Feed}
            options={({ route }: any) => ({
              headerShown: false,
              // title: route.params.name,r
             
            })}
          />
          {/* <Stack.Screen
            options={{ headerShown: false }}
            name="Landing"
            component={Landing}
          /> */}
          </Stack.Navigator>
          
          {/* <Button title={mode} onPress={()=>setMode('dark')} /> */}
      </NavigationContainer>
      </SafeAreaProvider>
  //  </ThemeProvider>
  );
};

export default App;
