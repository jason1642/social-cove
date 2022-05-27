import * as React from 'react';
import { useState, useEffect } from 'react';
import { Text, View } from 'react-native'
import { Button } from '@rneui/base'
import { makeStyles } from '@rneui/themed'
import {useTheme,useFocusEffect} from '@react-navigation/native'
import { useSelector} from 'react-redux'
import Guest from '../../components/account/Guest'
interface IMainProps {
  navigation: any,
}

const Main: React.FunctionComponent<IMainProps> = ({navigation}) => {
  const { colors } = useTheme()
  const styles = useStyles(colors)
  const { data, authenticated, token } = useSelector((state: any) => state.user)


  // useEffect(() => {
  //   if (!authenticated) {
  //     navigation.navigate('RegisterModal')
  //   }
  //   console.log("Rendering account screen")

  // }, [navigation]);




  return authenticated ? (<Text style={styles.title}>Logged in!!</Text>) :(
    <Guest navigation={navigation}/>
  );
};

export default Main;



const useStyles = makeStyles((theme, props:any) => ({
  title: {
    color: props.text
  }
}))
