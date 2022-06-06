import * as React from 'react';
import { View, StyleSheet } from 'react-native'
import { Skeleton } from '@rneui/themed'


interface IPostsGroupSkeletonProps {
}

const PostsGroupSkeleton: React.FunctionComponent<IPostsGroupSkeletonProps> = (props) => {
  return (
    <View style={styles.container}>
      {
        [1, 2, 3, 4, 5, 6, 7, 8, 9].map(ele => <React.Fragment key={ele}>
          <Skeleton animation='wave' style={styles.post} />
        </React.Fragment>)
      }
      </View>
  );
};

export default PostsGroupSkeleton;

const styles = StyleSheet.create({
  container: { 
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',

  },
  post: {
    height: 130,
    width: '32.5%',
    marginVertical: 1,
  }
})