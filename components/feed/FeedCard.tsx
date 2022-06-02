import * as React from 'react';
import { Text, View } from 'react-native'


interface IFeedCardProps {
  postData: any,
}

const FeedCard: React.FunctionComponent<IFeedCardProps> = ({postData}) => {
  return (<View>
    <Text>
      {postData.title}qweqwew
    </Text>
  </View>);
};

export default FeedCard;
