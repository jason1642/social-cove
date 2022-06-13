import * as React from 'react';
import { View, Text, Pressable } from 'react-native'
import { makeStyles, Avatar, } from '@rneui/themed'

interface IStatColumnProps { 
  colors: any,
  title: string,
  amount: number,
  navigation: any,
  userId: number,
}

const StatColumn: React.FunctionComponent<IStatColumnProps> = ({ navigation, userId, colors, title, amount }) => {
  const styles = useStyles(colors)
  return (
    <View style={styles.container}>
      
      <Pressable
        disabled={title === 'Posts' ? true :false}
        onPress={()=>navigation.push('Follow List', {method: title.toLowerCase(), user_id: userId})}
        >
          <Text style={styles.span} >
          
          {title}
      </Text>
        </Pressable>
        
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