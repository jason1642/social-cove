import * as React from 'react';
import { useState, useEffect, useLayoutEffect } from 'react';

import { Text,View,Button } from 'react-native'
interface IFeedProps {
}

const Feed: React.FunctionComponent<IFeedProps> = ({ route, navigation }) => {
  const [count, setCount] = React.useState(0);


  useEffect(() => {
    if (route.params) {
      // Post updated, do something with `route.params.post`
      // For example, send the post to the server
      console.log(route)
    }
  }, [route.params]);


  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={()=> setCount(c=>c + 1)} title="Update count" />
      )
    })
  },[])
  return (
    <View>
      <Text>This is the FEED</Text>
      <Text>{count}</Text>
      <Button 
        title="Back Home"
        onPress={() => navigation.navigate('Home')}
      />
      <Button 
        title="Update the title"
        onPress={() => navigation.setOptions({ title: 'Updated' })}
      />
    </View>
  );
};

export default Feed;
