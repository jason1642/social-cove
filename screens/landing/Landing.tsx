import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Main from './Main'
import { View } from 'react-native'
import Login from '../Login'
import Register from '../Register'
const LandingStack = createNativeStackNavigator()

interface ILandingProps {
  navigation?: any;
  route?: any;
}

const Landing: React.FunctionComponent<ILandingProps> = ({route, navigation,}) => {

  // const { someParam } = route.params;
  return (
 

    <LandingStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <LandingStack.Screen
        name='Main'
        component={Main}
      />
      <LandingStack.Screen
        name={'Login'}
        component={Login}
        options={{
          headerShown: true,
        }}
      />
      <LandingStack.Screen
        name={'Register'}
        component={Register}
        options={{
          headerShown: true,
        }}
      />
          </LandingStack.Navigator>


    
  );
};

export default Landing;

