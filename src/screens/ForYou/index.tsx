import React, {memo} from 'react';
import {ScrollView} from 'react-native';
import UserItem from '../../components/UserItem';

const ForYou = memo(() => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <UserItem
        image={require('../../assets/Followers/Bite.png')}
        name={'Bite Back'}
        numberFollower={'1279'}
      />
      <UserItem
        image={require('../../assets/Followers/Femma.png')}
        name={'Femma'}
        numberFollower={'944'}
      />
      <UserItem
        image={require('../../assets/Followers/rosa_logo.jpg')}
        name={'Rosa'}
        numberFollower={'641'}
      />
    
      
    </ScrollView>
  );
});

export default ForYou;
