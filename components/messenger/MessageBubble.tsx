import * as React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, } from 'react-native'
import moment from 'moment'

interface IMessageBubbleProps {
  messageData: any,
  currentUserId: number,
}

const MessageBubble: React.FunctionComponent<IMessageBubbleProps> = ({ messageData, currentUserId, }) => {
  // console.log(messageData)
  return (
    <View style={{
      ...styles.container,
      alignSelf: messageData.sender.id === currentUserId ? 'flex-end' : 'flex-start'
    }}>

      {/* <Text style={styles.label}>
      {messageData.sender.username}
      </Text> */}
    <Text style={styles.date}>{moment(messageData.created_at).format('MMM D YYYY, h:mm a')}</Text>

    <View style={styles.contentWrapper}>
    <Text>{messageData.content}x</Text>
      </View>
      
      
   </View>
  )
};

export default MessageBubble;


const styles = StyleSheet.create({
  container: {
    minWidth: '40%',
    maxWidth: '75%',
    // borderWidth: 1,
    borderColor: 'black',
    marginVertical: 3,
    padding: 5,
  },
  contentWrapper: {
    backgroundColor: 'lightblue',
    padding: 4,
    // alignSelf: 'stretch',
    marginVertical: 2,
    // minWidth: '100%',
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 5,
  },
  label: {
    textAlign: 'center',
  },
  date: {
    textAlign: 'center',
    fontSize: 11,
  },
})