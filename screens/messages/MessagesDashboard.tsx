import * as React from 'react';
import { useState, useEffect } from 'react';
import { ScrollView, Text, FlatList,  } from 'react-native';
import axios from 'axios'
import { RootState } from '../../redux/store'
import {useSelector} from 'react-redux'


interface IMessagesDashboardProps {
  navigation: any,
}

const MessagesDashboard: React.FunctionComponent<IMessagesDashboardProps> = ({navigation, }) => {

  const currentUser = useSelector((state: RootState)=> state.user)
  return (
    <Text
      onPress={()=>navigation.push('Conversation', {recipient_id: 5})}
    >No Messages!</Text>
  )
};

export default MessagesDashboard;
