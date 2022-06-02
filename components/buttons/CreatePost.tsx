import * as React from 'react';
import { Button } from '@rneui/base'
import { StyleSheet } from 'react-native';



interface ICreatePostButtonProps {
  title: string,
  color?: string,
  buttonFunction: Function,
  buttonProps?: any,
}

const CreatePostButton: React.FunctionComponent<ICreatePostButtonProps> = ({title, color, buttonFunction, buttonProps}) => {
  return (
    <Button
      title={title}
      color={color}
      onPress={buttonFunction}
      {...buttonProps}
      size='md'
      radius={6}
      style={styles.text}
      containerStyle={styles.button}
    />);
};

export default CreatePostButton;


const styles = StyleSheet.create({
  button: {
    width: '70%',
    marginVertical: 8,
  
  },
  text: { 
    fontSize: 34,
  }
})