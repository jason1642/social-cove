import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native'
import { makeStyles, } from '@rneui/themed'

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
      <Text>This is the landing page</Text>
      {/* <Text>{someParam}</Text> */}
      <Text>Maybe have a log in form with a register button below</Text>
      <Button
        title="Go to Home"
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{name: 'Home'}]
          })
        }
      />
    </View>
  );
};

export default Landing;

const useStyles = makeStyles((theme, props: any) => ({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
}))