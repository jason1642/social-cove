import { View, Text, Pressable, } from 'react-native'
import * as React from 'react';
import { makeStyles } from '@rneui/themed'



interface ICardProps {
  commentData: any,
  colors: any,
  navigation: any,
}

const Card: React.FunctionComponent<ICardProps> = ({colors, commentData, navigation}) => {
  
  const styles = useStyles(colors)
  return (
    <View style={styles.container}>
      <Text>
        <Pressable
          onPress={()=>navigation.navigate('User Account', {user_id: commentData.user.id})}
        ><Text style={styles.username}>{commentData.user.username}: </Text>
        </Pressable>
        <Text style={styles.content}>
        {commentData.content}
        </Text>
      </Text>
      

    </View>
  );
};

export default Card;


const useStyles = makeStyles((theme, props: any) => ({
  container: {
    padding: 5,
    borderRadius: 5,
    // backgroundColor: 'grey',
    borderColor: 'grey',
    borderWidth: 1,
    marginVertical: 5,
    minHeight: 40,
    maxHeight: 200,
    justifyContent: 'center',
  },
  content: {
    color: props.text,
    fontSize: 14,
  },
  username: { 
    color: 'white',
    fontWeight: 'bold',
    padding: 2,
  }
}))