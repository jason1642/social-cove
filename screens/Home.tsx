import * as React from 'react';
import { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Feed from './feed/Feed'
import Account from './account/Account'
import {Icon} from '@rneui/themed'
interface IHomeProps {
  navigation: any;
  someParam: string;
  route: any;
}

const Tab = createBottomTabNavigator()


const Home: React.FunctionComponent<IHomeProps> = ({ navigation, route }) => {
  // const { someParam } = route.params
  useEffect(() => {
    // console.log(route.params, 'this is route params from home.tsx');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    // <View>
    //   <Text>This is the home page</Text>
    
    //   <Button
    //     title="Go to Landing"
    //     onPress={() =>
    //       navigation.navigate('Landing', {
    //         someParam:
    //           'This is a param passed in the navigate method in the landing screen component',
    //       })
    //     }
    //   />
    //   <Button
    //     title="Go to Feed"
    //     onPress={() =>
    //       navigation.navigate('Feed', {
    //         postTitle: 'This is the post title',
    //       })
    //     }
    //   />
    //   <Button
    //     title="Go to your account"
    //     onPress={() => navigation.navigate('Account')}
    //   />






      <Tab.Navigator>
        <Tab.Screen
          name="Feed"
          component={Feed}
        options={{
          headerShown:false,
            tabBarLabel: 'Feed',
            tabBarIcon: () => 
              <Icon name='rowing' /> 
          }}
      />
      <Tab.Screen
        name='Account'
        component={Account}
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: () => 
            <Icon type='material-icons' name='open-in-new' />
        }}
        />
      </Tab.Navigator>
    // </View>
  );
};

export default Home;
