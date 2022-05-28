import * as React from 'react';
import { useState, useEffect } from 'react';
import { Text, View } from 'react-native'
import { Button } from '@rneui/base'
import { makeStyles } from '@rneui/themed'
import {useTheme,useFocusEffect} from '@react-navigation/native'
import { useSelector} from 'react-redux'
import Guest from '../../components/account/Guest'
import {removeToken} from '../../api-helpers/users'
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
    <View>
      <Text style={styles.title}>Logged in as {data.username}</Text>
      <Button title='Log out' onPress={() => {
        console.log(data)
        removeToken()
      }} />
      </View>) : (
    <Guest navigation={navigation}/>
  );
};

export default Main;



const useStyles = makeStyles((theme, props:any) => ({
  title: {
    color: props.text
  }
}))
