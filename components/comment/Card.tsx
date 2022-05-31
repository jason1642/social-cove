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
      <Text style={styles.title}>
      {commentData.content}
      </Text>
    </View>
  );
};

export default Card;


const useStyles = makeStyles((theme, props: any) => ({
  container: {
    padding: 10,
    backgroundColor: 'grey',
  },
  title: {
    color: props.text,
    fontSize: 16,
  }
}))