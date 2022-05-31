import { Button } from '@rneui/base';
import * as React from 'react';
// import { useState, useEffect } from 'react';
import { Text, View, ScrollView } from 'react-native';

interface IPostsProps {}

const Posts: React.FunctionComponent<IPostsProps> = ({ }) => {
  console.log('THIS IS THE POSTS TAB')
  return (
    <View  style={{flex: 1,backgroundColor: 'green'}}>
      <Text style={{flex: 1,color: 'red'}}>This is the account posts section</Text>
      <Text style={{color: 'red'}}>This is the account posts section</Text>
      <Text style={{fontSize: 100,color: 'red'}}>This is the account posts section</Text>
      <Text style={{color: 'red'}}>This is the account posts section</Text>
      <Text style={{color: 'red'}}>This is the account posts section</Text>
      <Text style={{color: 'red'}}>This is the account posts section</Text>
      <Text style={{color: 'red'}}>This is the account posts section</Text>
      <Text style={{color: 'red'}}>This is the account posts section</Text>
      <Button title="BUTTON"/>
    </View>
  );
};

export default Posts;


