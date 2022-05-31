import * as React from 'react';
import { View, Text} from 'react-native'
import Card from './Card'
import { makeStyles } from '@rneui/themed'


interface ISectionProps {
  colors: any,
  commentArray: any,
}

const Section: React.FunctionComponent<ISectionProps> = ({ colors, commentArray }) => {
  const styles = useStyles(colors)
  console.log(commentArray)
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{commentArray.length} Comments</Text>
      <View>
        {
          commentArray.map((ele: any) => <Card colors={colors} commentData={ele} />)
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