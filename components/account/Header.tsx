import * as React from 'react';
// import { useState, useEffect } from 'react';
import { Text, View } from 'react-native'
import { makeStyles, Avatar, } from '@rneui/themed'
import StatColumn from './StatColumn';



interface IHeaderProps {
  colors: any,
  userData: any,
}



const Header: React.FunctionComponent<IHeaderProps> = ({ colors, userData }) => {
  const { followers, following, posts } = userData
  // console.log(userData.profile_picture_url)
  const values = [
    { name: 'Posts', amount: posts.length },
    { name: 'Followers', amount: followers.length },
    { name: 'Following', amount: following.length}
  ]


  const styles = useStyles(colors)
  return (<View style={styles.container}>
    <View style={styles.topRow}>
      
       {userData && <Avatar
        size='large'
        icon={{name:'account-circle', type:'material-icons'}}
        source={{uri: userData.profile_picture_url}}
        rounded
        containerStyle={{ backgroundColor: 'orange', }}
        // iconStyle={{height: '100%'}}
        />}
      
      <View style={styles.columnWrapper}>

        {values.map(ele =>
        <StatColumn
          key={ele.name}
          colors={colors}
          title={ele.name}
          amount={ele.amount}
        />)}

    </View>
    
      
        </View>
        

    <View style={{flex: 1}}>
      
             <Text style={styles.title}>{userData.username}</Text>
        <Text style={styles.bioLabel}>Bio:</Text>
    <Text style={styles.bio}>{userData.bio}</Text>
        </View>

 
    
  </View>);
};

export default Header;


const useStyles = makeStyles((theme, props:any) => ({
  title: {
    color: props.text,
    paddingVertical: 10,
    fontSize: 18,
    paddingHorizontal: 15,
  },
  columnWrapper: {
    flex: 1,
    flexDirection: 'row',

  },
  topRow: {
    flex: 0,
    // backgroundColor: 'green',
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  bioLabel: {
    alignSelf: 'flex-start',
    paddingHorizontal: 20,
    color: props.text,
  },
  bio: {
    color: props.text,
    fontSize: 16,
    paddingHorizontal: 20,
    paddingVertical: 2,
    // backgroundColor: 'grey',
    alignSelf: 'flex-start',
  },
  container: {
    flex: 1,
    // flexDirection: 'row',
    paddingVertical: 10,
    // justifyContent: 'space-between'
  }
}))