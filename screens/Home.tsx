import * as React from 'react';
import {View, Text, Button} from 'react-native'
interface IHomeProps {
  navigation: any,
}

const Home: React.FunctionComponent<IHomeProps> = ({navigation}) => {
  return (
    <View>
      <Text>This is the home page</Text>
      <Button
        title="Go to Landing"
        onPress={()=>navigation.navigate('Landing')} />
    </View>
  );
};

export default Home;
