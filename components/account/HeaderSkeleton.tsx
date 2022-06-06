import * as React from 'react';
import { StyleSheet, View } from 'react-native'
import { Skeleton } from '@rneui/themed'

interface IHeaderSkeletonProps {
}

const statColumnWidth = 55, statColumnHeight = 50
const HeaderSkeleton: React.FunctionComponent<IHeaderSkeletonProps> = (props) => {
  return (
    <View style={styles.container} >
      <View style={styles.topRow} >
        <Skeleton height={80} width={80} style={styles.avatar} animation='pulse' circle />

          <Skeleton height={statColumnHeight} width={statColumnWidth}  style={styles.statColumn} animation='pulse' />
          <Skeleton height={statColumnHeight} width={statColumnWidth}  style={styles.statColumn} animation='pulse' />
          <Skeleton height={statColumnHeight} width={statColumnWidth}  style={styles.statColumn} animation='pulse' />
      

      
      </View>
      <View style={styles.bioContainer} >
        <Skeleton style={{marginVertical: 5}} height={10} width={100} animation='wave' />
        <Skeleton style={styles.bio} animation='wave'/>
        <Skeleton style={styles.bio} animation='wave' />
      </View>
 
    </View>
  );
};

export default HeaderSkeleton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 15,
    // flexDirection: 'row',
  },
  avatar: {

  },
  statColumn: {
    margin: 10,
    // flex: 1,
    // flexDirection: 'row',

    paddingVertical: 15,
    justifyContent: 'space-between',
  },
  statColumnContainer: {
    
  },
  bio: {
    height: 6,
    marginVertical: 3,
  },
  bioContainer: { 
    paddingHorizontal: 10,
  },
  topRow: {
    flex: 1,
    // backgroundColor: 'green',
    flexDirection: 'row',
    paddingHorizontal: 10,

    justifyContent: 'space-around',
  },
})