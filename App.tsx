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
import Feed from './screens/Feed';
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
// import { ThemeProvider, useThemeMode } from '@rneui/themed';
import { DarkTheme } from './resources/themes'




const Stack = createNativeStackNavigator();




const App = () => {
  const scheme = useColorScheme()
  // const { mode, setMode } = useThemeMode()
  const user = useSelector((state: RootState) => state.user.username)
  // const dispatch = useDispatch()
  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };
  useEffect(() => {
    console.log(user)
  }, [user]);

  return (
    // <ThemeProvider theme={theme}>

    <SafeAreaProvider>

      <NavigationContainer theme={DarkTheme}>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#65badf',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: 'Overview' }}
          />
          <Stack.Screen name="Account" component={Account} />
          <Stack.Screen
            name="Feed"
            component={Feed}
            options={({ route }: any) => ({
              title: route.params.name,
              headerStyle: {
                backgroundColor: '#f4511e',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              headerRight: () => (
                <Button
                  onPress={() => Alert.alert('This is a button!')}
                  title="Info"
                  color="#fff"
                />
              ),
            })}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Landing"
            component={Landing}
          />
          </Stack.Navigator>
          
          {/* <Button title={mode} onPress={()=>setMode('dark')} /> */}
      </NavigationContainer>
      </SafeAreaProvider>
      // </ThemeProvider>
  );
};

export default App;
