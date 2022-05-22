import * as React from 'react'
import { View, Text, Button } from 'react-native'

 
interface ILandingProps{
  navigation: any
}

 
const Landing: React.FunctionComponent<ILandingProps> = ({route, navigation}) => {
  const { someParam } = route.params
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>This si the landing page</Text>
      <Text>{someParam}</Text>
      <Button
        title="Go to Home"
        onPress={() =>
          navigation.navigate('Home',
            {
              someParam: "This is a param passed in the navigate method in the landing screen component"
            })} />
    </View>
  )
}; 

export default Landing;
