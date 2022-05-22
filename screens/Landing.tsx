import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
interface ILandingProps {
  navigation: any;
  route: any;
}

const Landing: React.FunctionComponent<ILandingProps> = ({
  route,
  navigation,
}) => {
  const { someParam } = route.params;
  return (
    <View style={styles.container}>
      <Text>This si the landing page</Text>
      <Text>{someParam}</Text>
      <Button
        title="Go to Home"
        onPress={() =>
          navigation.navigate('Home', {
            someParam:
              'This is a param passed in the navigate method in the landing screen component',
          })
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Landing;
