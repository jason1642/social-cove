import * as React from 'react';
import { useState, useEffect } from 'react';
import { Text, View, ScrollView } from 'react-native'
import {makeStyles} from '@rneui/themed'
import {useTheme} from '@react-navigation/native'
interface ICreatePostProps {
}

const CreatePost: React.FunctionComponent<ICreatePostProps> = (props) => {

  const { colors } = useTheme()
  const styles = useStyles(colors)

  return (
    <View>
      <Text style={styles.title}>Create a post with this form</Text>
    </View>
  );
};

export default CreatePost;

const useStyles = makeStyles((theme, props:any) => ({
  title: {
    color: props.text
  }
}))
