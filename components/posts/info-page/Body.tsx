import * as React from 'react';
import { View, Text } from 'react-native'
import { makeStyles } from '@rneui/themed';
import { useTheme } from '@react-navigation/native'

interface IBodyProps {
  postData: any,
  colors: any,
}

const Body: React.FunctionComponent<IBodyProps> = ({postData, colors}) => {
  const styles = useStyles(colors)
  return (
    <View>
      <Text style={styles.description}>{postData.content}</Text>
      <Text style={styles.description}>This is post ID {postData.id}</Text>
    </View>
  );
};

export default Body



const useStyles = makeStyles((theme, props:any) => ({
  description: {
    color: props.text,
    padding: 10,
    fontSize: 14,
  }
}))