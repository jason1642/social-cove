import { View } from 'react-native'
import * as React from 'react';

interface ICardProps {
  commentData: any,
}

const Card: React.FunctionComponent<ICardProps> = ({commentData}) => {


  return (
    <View>
      {commentData.content}
    </View>
  );
};

export default Card;
