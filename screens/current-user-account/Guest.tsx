import * as React from 'react';
import { useState, useEffect } from 'react';
import { Text, View } from 'react-native'
import { Button } from '@rneui/base'
import { useTheme } from '@react-navigation/native'
import { makeStyles, PricingCard} from '@rneui/themed'
import LogInOutButton from '../../components/buttons/LogInOut'
interface IGuestProps {
  navigation: any,
}

const Guest: React.FunctionComponent<IGuestProps> = ({ navigation }) => {
  const { colors } = useTheme()
  const styles = useStyles(colors)





  return (<View style={styles.container}>
    <Text style={styles.title}>
    You are not signed in
    </Text>
    {/* <PricingCard
        color={colors.secondary}
        title="Enterprise"
        price="$49"
        info={['100 Users', 'One on One Support', 'All Core Features']}
        button={{ title: ' GET STARTED', icon: 'flight-takeoff' }}
      /> */}

    <View style={styles.buttonContainer}>
      <LogInOutButton
        name='Log In'
        buttonFunction={() => navigation.navigate('LoginModal')}
      />
      <LogInOutButton
        name='Register an account'
        buttonFunction={() => navigation.navigate('RegisterModal')}
      />
    </View>

    

  </View>);
};

export default Guest;




const useStyles = makeStyles((theme, props: any) => ({
  container: {
    flex: 1,
    justifyContent: 'space-around',
  },
  title: {
    color: 'white',
    paddingVertical: 20,
    fontSize: 18,
    textAlign: 'center',
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'white',
  },
  buttonContainer: {
    // alignSelf: 'flex-end'
    paddingVertical: 10,
  },
  button: {
    width: '60%',
    alignSelf: 'center',
    marginVertical: 6 ,

  }
}))