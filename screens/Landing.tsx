import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native'
import { makeStyles, } from '@rneui/themed'
import { Button } from '@rneui/base';
import LottieView from 'lottie-react-native'

interface ILandingProps {
  navigation?: any;
  route?: any;
}

const Landing: React.FunctionComponent<ILandingProps> = ({route, navigation,}) => {
  const { colors } = useTheme()
  const styles = useStyles(colors)
  // const { someParam } = route.params;
  return (
    <View style={styles.container}>
    

        <LottieView
        style={{
          flex: 1,
          marginVertical: 10,
          flexShrink: 0,
          display: 'flex',
          position: 'relative', maxWidth: '100%', maxHeight: 300
        }}
        source={require('../resources/animation.json')}
        autoPlay
        loop={true}
        />
      
      

      <View style={{flex: 1, }}>
         <Text style={styles.title}>This is the landing page</Text>
      {/* <Text>{someParam}</Text> */}
      <Text>Maybe have a log in form with a register button below</Text>
      <Button
          title="Skip for now"
          type='outline'
          onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{name: 'Home'}]
          })
        }
          style={styles.button}
      />
      </View>
     


    </View>
  );
};

export default Landing;

const useStyles = makeStyles((theme, props: any) => ({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  }, 
  title: {
    color: props.text
  },
  button: {
   marginVertical: 15 
  }
}))