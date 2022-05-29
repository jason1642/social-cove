import * as React from 'react';
import { useState, useEffect } from 'react';
import { Text, View } from 'react-native'
import { makeStyles, Avatar, } from '@rneui/themed'
import {useTheme,useFocusEffect} from '@react-navigation/native'
import { useSelector} from 'react-redux'
import Guest from './Guest'
import { removeToken } from '../../api-helpers/users'
import LogInOutButton from '../../components/buttons/LogInOut'

interface IMainProps {
  navigation: any,
}

const Main: React.FunctionComponent<IMainProps> = ({navigation}) => {
  const { colors } = useTheme()
  const styles = useStyles(colors)
  const { data, authenticated, token } = useSelector((state: any) => state.user)


  useEffect(() => {
  
    console.log(authenticated)

  }, [authenticated]);




  return authenticated ? (
    <View
      style={styles.container}
    >

      <View
        style={styles.header}
      >
        <Avatar
        size={64}
        rounded
        title={'T'}
        containerStyle={{ backgroundColor: 'blue', }}
        iconStyle={{}}
      />

        <Text style={styles.title}>Logged in as {data.username}</Text>
        <Text style={styles.bioLabel}>Bio:</Text>
        <Text style={styles.bio}>{data.bio}</Text>
      </View>
      


      <View
        style={{
          
        }}
      >

        <LogInOutButton
        name='Settings'
        color='grey'
        buttonFunction={() => {
          console.log("this is the settings button being pressed")
        }}
      /> 
      <LogInOutButton
        name='Log Out'
        buttonFunction={() => {
        console.log(data)
        removeToken()
      }}
      />
      </View>
      

    </View>)
    : (
      <Guest
        navigation={navigation}
      />
  );
};

export default Main;



const useStyles = makeStyles((theme, props:any) => ({
  title: {
    color: props.text,
    paddingVertical: 10,
    fontSize: 18,
  },
  header: {
    // flex: 1,
    // height: 50,
    alignItems: 'center',
    
    paddingVertical: 15,
    width: '100%',
    backgroundColor: 'green'
  },
  bioLabel: {
    alignSelf: 'flex-start',
    paddingHorizontal: 20,
  },
  bio: {
    // color: 'red',
    fontSize: 16,
    paddingHorizontal: 20,
    paddingVertical: 2,
    // backgroundColor: 'grey',
    alignSelf: 'flex-start',
  },
  container: {
    flex: 1,
    paddingVertical: 15,
    justifyContent: 'space-between'
  }
}))
