import { View, Text } from 'react-native'
import * as React from 'react';
import { makeStyles } from '@rneui/themed'



interface ICardProps {
  commentData: any,
  colors: any,
}

const Card: React.FunctionComponent<ICardProps> = ({colors, commentData}) => {
  
  const styles = useStyles(colors)
  return (
    <View style={styles.container}>
      <Text>{commentData.user.username}</Text>
      <Text style={styles.title}>
      {commentData.content}
      </Text>
    </View>
  );
};

export default Card;


const useStyles = makeStyles((theme, props: any) => ({
  container: {
    padding: 5,
    borderRadius: 5,
    backgroundColor: 'grey',
    marginVertical: 5,
  },
  title: {
    color: props.text,
    fontSize: 16,
  }
}))