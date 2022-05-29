import * as React from 'react';
import { useState, useEffect } from 'react';
import { View, Text } from 'react-native'   
interface IShopProps {
}

const Shop: React.FunctionComponent<IShopProps> = (props) => {
  return (
    <View>
      <Text>
        This is the shop store beta, currently in development
      </Text>
    </View>
  );
};

export default Shop;
