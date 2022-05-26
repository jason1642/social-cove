import * as React from 'react';
import { Text, View } from 'react-native'
import {Card as Container } from '@rneui/themed'
interface ICardProps {
  postData: any,
}

const Card: React.FunctionComponent<ICardProps> = ({ postData }) => {
  const { title, content } = postData
  return (
    <Container>
      <Text>{title}</Text>
      <Text>{content}</Text>
    </Container>
  );
};

export default Card;
