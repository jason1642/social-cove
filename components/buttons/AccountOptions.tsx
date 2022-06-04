import { Button } from '@rneui/base';
import * as React from 'react';
import { StyleSheet } from 'react-native';

interface IAccountOptionsProps {
  name: string,
  color?: string,
  buttonFunction: Function,
  buttonProps?: any,
}

const AccountOptions: React.FunctionComponent<IAccountOptionsProps> = ({name, color, buttonFunction, buttonProps}) => {
  return (
    <Button
      title={name}
      color={color}
      onPress={buttonFunction}
      {...buttonProps}
      size='sm'
      radius={6}
      containerStyle={styles.button}
    />);
};

export default AccountOptions;

const styles = StyleSheet.create({
  button: {
    width: '30%'
  }
})