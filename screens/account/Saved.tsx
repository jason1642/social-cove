import * as React from 'react';
import { Text, View } from 'react-native';


interface ISavedProps {}

const Saved: React.FunctionComponent<ISavedProps> = ({}) => {
  return (
    <View>
      <Text>This is the SAVED section in the accounts stack</Text>
    </View>
  );
};

export default Saved;
