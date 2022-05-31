import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';

interface IThumbnailProps {
  data: any,
}

const Thumbnail: React.FunctionComponent<IThumbnailProps> = ({data}) => {
  console.log(data)
  return data !== 'x' ? (
    <View style={styles.container}>
      <Text>This is a thumbnail</Text>
    </View>
  ) : 
    (<View style={{height: 10, width: '32%'}}>
        {/* <Text>rpqwomr</Text> */}
    </View>)
};

export default Thumbnail;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignSelf: 'flex-start',
    
    marginVertical: 3,
    backgroundColor: 'green',
    borderColor: 'black',
    borderWidth: 1,
    width: '32%',
    height: 150,
    padding: 4,
  }
})
