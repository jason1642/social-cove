import * as React from 'react';
import { useState, useEffect } from 'react';
import {getFollowList} from '../../../api-helpers/users'
import { FlatList, Text, StyleSheet, } from 'react-native'
import UserCard from './FollowListUserCard'
import CardSkeleton from './CardSkeleton'


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
        headerTitle: method === 'following' ? 'Following' : 'Followers'
      })
    })
  }, []);
  return !followArray ?
    <>{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(ele => <CardSkeleton key={ele} />)}</> 
    : followArray && followArray.length === 0
      ? <Text style={styles.noFollowsMessage}>{method === 'following' ? 'No users followed' : 'No followers'}</Text>
      :
      (<FlatList
      data={followArray}
        renderItem={({ item, index }: { item: any, index: number }) =>
          <UserCard navigation={navigation} userData={item} />}
    />
  ) 
    
   
};

export default FollowingList;

const styles = StyleSheet.create({
  noFollowsMessage: {
    paddingVertical: 15,
    fontSize: 20,
    textAlign: 'center'
  }
})