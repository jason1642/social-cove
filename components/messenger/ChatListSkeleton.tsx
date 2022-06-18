import * as React from 'react';
import { Skeleton } from '@rneui/themed'
import { StyleSheet, View } from 'react-native'


interface IChatListSkeletonProps {
}

const ChatListSkeleton: React.FunctionComponent<IChatListSkeletonProps> = (props) => {
  return (
    <View>
      {
        
        [1, 2, 3, 4, 5, 6].map(ele =>
          <View style={styles.card} key={ele}>
            <Skeleton circle width={45} height={45} />

            <View style={styles.lineContainer}>
              <Skeleton style={styles.line} width={185} height={7} />
              <Skeleton style={styles.line} width={185} height={7} />
              </View>
            </View>
        )
      }
    </View>
  );
};

export default ChatListSkeleton;



const styles = StyleSheet.create({
  card: {
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  lineContainer: { 
    marginLeft: 5,
  },
  line: {
    marginVertical: 4,
  }
})
