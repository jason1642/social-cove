import * as React from 'react';
import { useState, useEffect } from 'react';
import { Text, View } from 'react-native'
import { Button } from '@rneui/base'
import { makeStyles } from '@rneui/themed'
import {useTheme,useFocusEffect} from '@react-navigation/native'
import { useSelector} from 'react-redux'

interface IMainProps {
  navigation: any,
}

const Main: React.FunctionComponent<IMainProps> = ({navigation}) => {
  const { colors } = useTheme()
  const styles = useStyles(colors)
  const { data, authenticated, token } = useSelector((state: any) => state.user)


  useEffect(() => {
    if (!authenticated) {
      navigation.navigate('MyModal')
    }
    console.log("Rendering account screen")

  }, [navigation]);




  return (
    <View>
      <Text style={styles.title}>This is the main page for the account screen</Text>
      <Button title='Open Modal' onPress={()=>navigation.navigate('MyModal')} />

    </View>
  );
};

export default Main;



const useStyles = makeStyles((theme, props:any) => ({
  title: {
    color: props.text
  }
}))
