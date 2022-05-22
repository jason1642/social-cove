import * as React from 'react';
// import { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import Posts from './Posts';
import Saved from './Saved';
import { Icon } from "@rneui/themed";
import { AntDesign } from '@expo/vector-icons';
import { IconFill } from '@ant-design/icons-react-native'
// import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
interface IAccountProps { }

const myIcon = <Icon
  name="heartbeat"
  type="font-awesome"
  size={30}
  color="blue"
  onPress={()=>console.log('This is from the account bottom nav icon')}
/>;

const Tab = createBottomTabNavigator();

const FillerComponent = () => {
  return (
    <View>
      <Text>This is a filler tab</Text>
    </View>
  );
};

const Account: React.FunctionComponent<IAccountProps> = ({}) => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Posts"
        component={Posts}
        options={{
          tabBarLabel: 'Posts',
          tabBarIcon: () =>  <Icon
          name='rowing' />,
        }}
      />
      <Tab.Screen
        name="Saved"
        component={Saved}
        options={{
          tabBarIcon: () => <IconFill name="android" />
        }}
      />
      <Tab.Screen
        name="Filler"
        component={FillerComponent}
        options={{
          tabBarIcon: () => myIcon
        }}
      />
    </Tab.Navigator>
  );
};

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
// function TabBarIcon(props: {
//   name: React.ComponentProps<typeof FontAwesome>['name'];
//   color: string;
// }) {
//   return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
// }

export default Account;
