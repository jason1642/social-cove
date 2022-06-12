import * as React from 'react';
import { useState, useEffect } from 'react';
import {getFollowList} from '../../api-helpers/users'
import { FlatList, Text,} from 'react-native'

interface IFollowingListProps {
  route: any,
  navigation: any,
}

const FollowingList: React.FunctionComponent<IFollowingListProps> = ({ route, navigation}) => {
  const { user_id, method } = route.params
  const [followArray, setFollowArray] = useState<any>();
  useEffect(() => {

    getFollowList(user_id, method).then(res => {
      // console.log(res)
      setFollowArray(res)
      navigation.setOptions({
        headerTitle: method
      })
    })
  }, []);
  return followArray ? (
    <FlatList
      data={followArray}
      renderItem={({ item, index }: { item: any, index: number }) => <Text key={item.id + (Math.random() * 100)} style={{ color: 'black'}}>{item.username}</Text>}
    />
  ) : 
    <Text> NO FOLLOW DATA</Text>
};

export default FollowingList;
 