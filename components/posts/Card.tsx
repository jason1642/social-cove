import * as React from 'react';
import { Text, View } from 'react-native'
import { Card as Container } from '@rneui/themed'
import { useTheme } from '@react-navigation/native'
import {makeStyles } from '@rneui/themed'
interface ICardProps {
  postData: any,
}


const Card: React.FunctionComponent<ICardProps> = ({ postData }) => {
  const {colors } = useTheme()
  const { title, content } = postData
  const styles = useStyles(colors)

  return (
    <Container
      containerStyle={styles.container}
    >
      <Container.Title style={{ color: colors.text }}>{title}</Container.Title>
      <Text>{content}</Text>
    </Container>
  );
};

export default Card;




const useStyles = makeStyles(( props: any ) => ({
  container: {
    backgroundColor: props.card,
    borderColor: props.border
  }
}))