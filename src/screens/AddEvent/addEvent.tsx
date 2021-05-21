import React, {memo} from 'react';
import {StyleSheet, View,Text, SafeAreaView} from 'react-native';
import HeaderProfile from 'screens/About/components/HeaderProfile';

const item = {
  coverImage: require('../../assets/Profile/CoverImage.png'),
  avatar: require('../../assets/Profile/Avatar.png'),
  userName: 'Hieu Le',
  address: 'Washington, DC',
  followers: '1.5M',
  following: 25,
  numberMessage: 2,
  reward: 15,
  interested: ['#art', '#festival', '#fashion', '#expo...'],
  notification: 1,
};

const addEvent = memo(() => {
  return (
    <SafeAreaView>
    <View style={styles.container}>
      <Text>ADD EVENT</Text>
    </View>
    </SafeAreaView>
   
  );
});

export default addEvent;

const styles = StyleSheet.create({
  container: {
 
  },
});
