import * as React from 'react';
import { StyleSheet, Text, View, } from 'react-native'
interface ICardFooterProps {
  postInfo: any,
}

const CardFooter: React.FunctionComponent<ICardFooterProps> = ({postInfo}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.bodyText}>
        {postInfo.content}
      </Text>
    </View>
  );
};

export default CardFooter;


const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  bodyText: {
    fontSize: 20,
  }
})