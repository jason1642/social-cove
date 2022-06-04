import * as React from 'react';
import { useState, useEffect } from 'react';
import FeedList from '../../components/feed/FeedList'



interface IPopularProps {
  navigation: any,
  route: any,
}


const Popular: React.FunctionComponent<IPopularProps> = ({route, navigation}) => {


  
  return (

    <FeedList navigation={navigation}/>
    
  )
};

export default Popular;
