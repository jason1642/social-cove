import * as React from 'react';
import { useState, useEffect } from 'react';
import { Text, View, } from 'react-native'
interface ISettingsProps {
}

const Settings: React.FunctionComponent<ISettingsProps> = (props) => {
  return (
    <View>
      <Text>This is the settings screen</Text>
      
      <Text>Here you can: change password,
        change photo/avatar color, change privacy mode,
        change color theme, etc</Text>
    </View>
  );
};

export default Settings;
