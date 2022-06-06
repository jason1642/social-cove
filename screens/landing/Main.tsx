import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native'
import { makeStyles, } from '@rneui/themed'
import { Button } from '@rneui/base';
import LottieView from 'lottie-react-native'



interface IMainProps {
  navigation: any,
}

const Main: React.FunctionComponent<IMainProps> = ({ navigation }) => {
  
  const { colors } = useTheme()
  const styles = useStyles(colors)
  return (<View style={styles.container}>
    

 
  
  

    <View style={styles.wrapper}>

      
      <View style={styles.header}>
         <Text style={styles.title}>Social Cove</Text>
          {/* <Text>{someParam}</Text> */}
          <Text style={styles.intro}>Made with the love for React</Text>
           <LottieView
            style={{
              flex: 1,
              position: 'relative',
              // maxWidth: '100%',
              maxHeight: 300
              }}
              source={require('../../resources/lottie-animation-files/animation.json')}
              autoPlay
              loop={false}
              />
      </View>
    

      
      <View style={styles.buttonGroup}>
         <Button
          title="Log in"
          type='outline'
          onPress={() =>
          navigation.navigate('Login')}
          buttonStyle={styles.button}
        />
    <Button
      title="Register"
      type='outline'
      onPress={() =>
      navigation.navigate('Register')}
      buttonStyle={styles.button}
    />
    <Button
        title="Skip for now"
          type='outline'
          // color={'error'}
        onPress={() =>
        navigation.reset({
          index: 0,
          routes: [{name: 'Home'}]
        })}
        buttonStyle={styles.button}
    />
      </View>
   
  </View>
 


</View>);
};

export default Main;


const useStyles = makeStyles((theme, props: any) => ({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  }, 
  wrapper: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
  header: {
    
  },
  title: {
    color: '#4a8dd4',
    fontSize: 30,
    textAlign: 'center',
    paddingVertical: 10,
  },
  intro: {
    color: props.text,
    textAlign: 'center',
  },
  buttonGroup: {
    alignSelf: 'flex-end',
  },
  button: {
    marginVertical: 10,
    minWidth: '70%',
    borderWidth: 1,
  }
}))