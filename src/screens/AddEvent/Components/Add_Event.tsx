import React, {memo} from 'react';
import {ScrollView} from 'react-native';
import UserItem from '../../../components/UserItem';

const Add_Event = memo(() => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <UserItem
        image={require('../../../assets/Followers/img.jpg')}
        name={'Jose Lowe'}
        numberFollower={'179'}
      />
      <UserItem
        image={require('../../../assets/Followers/img.jpg')}
        name={'Hulda James'}
        numberFollower={'944'}
      />
     
    
    </ScrollView>
  );
});

export default Add_Event;
