import * as React from 'react';
import { View, Text} from 'react-native'
import Card from './Card'
import { makeStyles } from '@rneui/themed'
import Input from './Input'

interface ISectionProps {
  colors: any,
  commentArray: any,
  navigation: any,
}

const Section: React.FunctionComponent<ISectionProps> = ({ colors, commentArray, navigation }) => {
  const styles = useStyles(colors)
  // console.log(commentArray)
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{commentArray.length} Comment(s)</Text>


      <Input />

      <View>
        {
          commentArray.map((ele: any) => <Card navigation={navigation} key={ele.id} colors={colors} commentData={ele} />)
        }
      </View>
    </View>
  );
};
 
export default Section;


const useStyles = makeStyles((theme, props: any) => ({
  container: {
    padding: 10,
  },
  title: {
    color: props.text,
    fontSize: 16,
  }
}))