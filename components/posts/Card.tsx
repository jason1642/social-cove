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
  console.log(colors.border)
  return (
    <Container
      wrapperStyle={styles.wrapper}
      containerStyle={styles.container}
    >
      <Container.Title style={styles.title} >{title}</Container.Title>
      <Text style={styles.textStyle}>{content}</Text>
    </Container>
  );
};

export default Card;




const useStyles = makeStyles(( theme, props: any ) => ({
  container: {
    backgroundColor: props.card,
    color: props.text,
    flex:1,
    // borderColor: props.border
  },
  wrapper: {
    borderColor: props.border
  },
  textStyle: {
    color: props.text
  },
  title: {
    color: props.text,
    fontSize: 23,
    textAlign: 'left',
    
  }
}))