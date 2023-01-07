import * as React from 'react';
import { useState, useEffect } from 'react';
import { Text, View, } from 'react-native'
import { makeStyles } from '@rneui/themed'
import {useTheme} from '@react-navigation/native'

interface ISettingsProps {
  navigation: any;
}

const Settings: React.FunctionComponent<ISettingsProps> = ({navigation}) => {
  const { colors } = useTheme()
  const styles = useStyles(colors)

  useEffect(() => {
    navigation.setOptions({headerTitle: 'Settings'})
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>This is the settings screen</Text>
      
      <Text style={styles.label}>Here you can: change password,
        change photo/avatar color, change privacy mode,
        change color theme, etc</Text>
    </View>
  );
};

export default Settings;


const useStyles = makeStyles((theme, props:any) => ({
  container: {
    padding: 10,
  },
  label: {
    color: props.text
  }
}))