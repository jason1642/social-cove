import * as React from 'react';
import { useState, useEffect } from 'react';
import { View,Text } from 'react-native'

interface IAccountProps {
}

const Account: React.FunctionComponent<IAccountProps> = ({}) => {
  return (
    <View>
      <Text>This is the ACCOUNT page.</Text>
    </View>
  );
};

export default Account;
