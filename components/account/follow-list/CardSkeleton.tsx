import * as React from 'react';
import { View, StyleSheet, } from 'react-native'
import { Skeleton } from '@rneui/themed'


interface ICardSkeletonProps {
}

const CardSkeleton: React.FunctionComponent<ICardSkeletonProps> = (props) => {
  return (
    <View style={styles.container}>
      <Skeleton style={styles.avatar} circle height={46} width={46} />
      <View>
        <Skeleton style={styles.username} height={3} width={100} />
      <Skeleton style={styles.username} height={3} width={100} />
      </View>
      
    </View>
  );
};

export default CardSkeleton;


const styles = StyleSheet.create({
  avatar: {
    // alignSelf: 'center',
    // backgroundColor: 'orange',
    margin: 10,
  },
  container: { 
    flexDirection: 'row',
    alignItems: 'center',
    // alignSelf: 'center',
  },
  username: {
    marginVertical: 3,
  },

})