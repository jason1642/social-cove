import * as React from 'react';
import { View, TextInput, StyleSheet, } from 'react-native'



interface IInputProps {
}

const Input: React.FunctionComponent<IInputProps> = (props) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder='Comment here'
      />

    </View>
  );
};

export default Input;


const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  input: {
    backgroundColor: 'grey',
    padding: 5,
    borderRadius: 3,
  },
})