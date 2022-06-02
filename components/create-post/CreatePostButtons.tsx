import * as React from 'react';
import {makeStyles} from '@rneui/themed'
import { Text, ScrollView, View, Image, StyleSheet, } from 'react-native'
import Button from '../buttons/CreatePost'
import { Icon } from '@rneui/themed';
interface ICreatePostButtonsProps {
  buttonFunction: Function,
  handleChoosePhoto: Function,
}

const CreatePostButtons: React.FunctionComponent<ICreatePostButtonsProps> = ({buttonFunction, handleChoosePhoto}) => {
  return (
    <View style={styles.container}>
         <Button
        title='Choose Image'
          buttonFunction={handleChoosePhoto}
          buttonProps={{
            icon: <Icon color='white' name='image' type='material-icons' />,
            iconPosition: 'right'
          }}
      />
      <Button
        title='Post'
        buttonFunction={buttonFunction}
      />
      </View>
  );
};

export default CreatePostButtons;
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 6,
  }
})
