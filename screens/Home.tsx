
import * as React from 'react';
import { useState, useEffect } from 'react';
import {View, Text, Button} from 'react-native'
interface IHomeProps {
  navigation: any,
  someParam: string,
  route: any,
}

const Home: React.FunctionComponent<IHomeProps> = ({ navigation, route }) => {
  // const { someParam } = route.params
  useEffect(() => {
    console.log(route.params)
  }, []);
  return (
    <View>
      <Text>This is the home page</Text> 
      {/* {
        someParam && <Text>{someParam}</Text>
      } */}
      <Button
        title="Go to Landing"
        onPress={()=>navigation.navigate('Landing',{
          someParam: "This is a param passed in the navigate method in the landing screen component"
        })} />
      <Button
        title="Go to Feed"
        onPress={() => navigation.navigate('Feed', { postTitle: "This is the post title" })} 
      />
    </View>
  );
};

export default Home;
