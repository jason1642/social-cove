import { Button } from '@rneui/base';
import * as React from 'react';
// import { useState, useEffect } from 'react';
import { Text, View, ScrollView } from 'react-native';



const Posts: React.FunctionComponent<IPostsProps> = ({ }) => {
  console.log('THIS IS THE POSTS TAB')
  return (
    <ScrollView  style={{flex: 1,backgroundColor: 'green',zIndex: 5}}>
      <Text style={{color: 'red'}}>This is the account posts section</Text>
      <Text style={{color: 'red'}}>This is the account posts section</Text>
      <Text style={{fontSize: 100,color: 'red'}}>This is the account posts section</Text>
      <Text style={{color: 'red'}}>This is the account posts section</Text>
      <Text style={{color: 'red'}}>This is the account posts section</Text>
      <Text style={{color: 'red'}}>This is the account posts section</Text>
      <Text style={{color: 'red'}}>This is the account posts section</Text>
      <Text style={{color: 'red'}}>This is the account posts section</Text>
      <Button title="BUTTON"/>
    </ScrollView>
  );
};

export default Posts;


