import * as React from 'react';
import { useState, useEffect } from 'react';
import { makeStyles, Avatar, } from '@rneui/themed'
import {useTheme,useFocusEffect} from '@react-navigation/native'
import { StyleSheet, Text, View, } from 'react-native'
import Header from '../components/account/Header'
import { showVerboseUserInfo } from '../api-helpers/users'



interface IAccountProps {
  route: any,
}

const Account: React.FunctionComponent<IAccountProps> = ({ route }) => {
  const { user_id } = route.params
  const { colors } = useTheme()
  const styles = useStyles(colors)

  const [userData, setUserData] = useState()

  useEffect(() => {
    showVerboseUserInfo(user_id).then(res => {
      console.log(res.data)
      setUserData(res.data)
    })
  }, []);
  return (
    <View style={styles.container}>
      {userData &&
        <>
        <Header userData={userData} colors={colors} />
              <Text style={styles.title}>
                This is another users account, or even the current user {user_id}
              </Text>
        </>
     
      }
    </View>
  );
};

export default Account;

const useStyles = makeStyles((theme, props:any) => ({
  title: {
    color: props.text,
    paddingVertical: 10,
    fontSize: 18,
  },
  buttonOptions: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 10,
      // backgroundColor: 'red'
  },
  bioLabel: {
    alignSelf: 'flex-start',
    paddingHorizontal: 20,
    color: props.text,
  },
  bio: {
    color: props.text,
    fontSize: 16,
    paddingHorizontal: 20,
    paddingVertical: 2,
    // backgroundColor: 'grey',
    alignSelf: 'flex-start',
  },
  container: {
    flex: 1,
    paddingVertical: 15,
    // backgroundColor: 'red'
    // justifyContent: 'flex-start'
  }
}))