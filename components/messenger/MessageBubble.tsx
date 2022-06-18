import * as React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, } from 'react-native'
import moment from 'moment'
import { makeStyles } from '@rneui/themed'

interface IMessageBubbleProps {
  messageData: any,
  currentUserId: number,
  colors: any,
}

const MessageBubble: React.FunctionComponent<IMessageBubbleProps> = ({ messageData, colors, currentUserId, }) => {
  // console.log(messageData)
  const styles = useStyles(colors)

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
    <Text style={styles.content}>{messageData.content}</Text>
      </View>
      
      
   </View>
  )
};

export default MessageBubble;


const useStyles = makeStyles((theme, props: any) => ({
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
    padding: 6,
    // alignSelf: 'stretch',
    marginVertical: 2,
    // minWidth: '100%',
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 10,
  },
  content: {

  },
  label: {
    textAlign: 'center',
  },
  date: {
    textAlign: 'center',
    fontSize: 11,
    color: props.text,
  },
}))