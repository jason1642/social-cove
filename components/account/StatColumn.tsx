import * as React from 'react';
import { View, Text } from 'react-native'
import { makeStyles, Avatar, } from '@rneui/themed'

interface IStatColumnProps { 
  colors: any,
  title: string,
  amount: number,
}

const StatColumn: React.FunctionComponent<IStatColumnProps> = ({ colors, title, amount }) => {
  const styles = useStyles(colors)
  return (
    <View style={styles.container}>
      <Text style={styles.span} >{title}</Text>
      <Text style={styles.span} >{amount}</Text>
    </View>
  );
};

export default StatColumn;
const useStyles = makeStyles((theme, props:any) => ({
  span: {
    textAlign: 'center',
    color: props.text,
    fontSize: 17,
  },
  container: {
    flex: 1,
    // flexDirection: 'row',

    paddingVertical: 15,
    justifyContent: 'space-between'
  }
}))