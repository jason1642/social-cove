import * as React from 'react'
import { View, Text, Button } from 'react-native'


interface ILandingProps{
  navigation: any
}


const Landing: React.FunctionComponent<ILandingProps> = ({navigation}) => {
 
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>This si the landing page</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')} />
    </View>
  )
};

export default Landing;
