import * as React from 'react';
import { useState, useEffect } from 'react';
import { Text, View } from 'react-native'
import { makeStyles, Avatar, } from '@rneui/themed'
import {useTheme,useFocusEffect} from '@react-navigation/native'
import { useSelector} from 'react-redux'
import Guest from './Guest'
import { removeToken } from '../../api-helpers/users'
import LogInOutButton from '../../components/buttons/LogInOut'
import Header from '../../components/account/Header'
import {showVerboseUserInfo} from '../../api-helpers/users'
interface IMainProps {
  navigation: any,
}

const Main: React.FunctionComponent<IMainProps> = ({navigation}) => {
  const { colors } = useTheme()
  const styles = useStyles(colors)
  const { data, authenticated, token } = useSelector((state: any) => state.user)
  const [userData, setUserData ] = useState()

  useEffect(() => {
  
    showVerboseUserInfo(data.id).then(res => {
      setUserData(res.data)
      // console.log(res.data)
    }, err=> console.log(err))

    console.log(authenticated)

  }, [authenticated]);




  return authenticated ? (
    <View
      style={styles.container}
    >
      {userData && <Header userData={userData} colors={colors}/>}

      <View
        style={{
          
        }}
      >

        <LogInOutButton
        name='Settings'
        color='grey'
        buttonFunction={() => {
          navigation.navigate('Settings')
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
    // backgroundColor: 'green' 
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
    justifyContent: 'space-between'
  }
}))
