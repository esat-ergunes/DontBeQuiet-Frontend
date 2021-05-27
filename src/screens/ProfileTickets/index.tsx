import React, {memo, useCallback} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import keyExtractor from 'ultis/keyExtractor';
import TicketItem from 'screens/ProfileTickets/components/TicketItem';

const data = [
  {
    img: require('../../assets/ProfileActivity/BottledArt.png'),
    titlePost: 'test',
    timePost: 'SUN, MAR. 25  -  4:30 PM EST',
  },
  {
    img: require('../../assets/ProfileActivity/WWE.png'),
    titlePost: 'test',
    timePost: 'SUN, MAR. 25  -  4:30 PM EST',
  },
  {
    img: require('../../assets/ProfileActivity/MSG.png'),
    titlePost: 'test',
    timePost: 'SUN, MAR. 30  -  4:30 PM EST',
  },
  {
    img: require('../../assets/ProfileActivity/AMC.png'),
    titlePost: 'test',
    timePost: 'SUN, MAR. 28  -  4:30 PM EST',
  },
  {
    img: require('../../assets/ProfileActivity/BottledArt.png'),
    titlePost: 'test',
    timePost: 'SUN, MAR. 25  -  4:30 PM EST',
  },
  {
    img: require('../../assets/ProfileActivity/WWE.png'),
    titlePost: 'test',
    timePost: 'SUN, MAR. 25  -  4:30 PM EST',
  },
  {
    img: require('../../assets/ProfileActivity/MSG.png'),
    titlePost: 'test',
    timePost: 'SUN, MAR. 30  -  4:30 PM EST',
  },
  {
    img: require('../../assets/ProfileActivity/AMC.png'),
    titlePost: 'testeeeeee',
    timePost: 'SUN, MAR. 28  -  4:30 PM EST',
  },
];

const ProfileTickets = memo(() => {
  const renderItem = useCallback(({item}) => {
    const {img, titlePost, timePost} = item;
    return <TicketItem img={img} titlePost={titlePost} timePost={timePost} />;
  }, []);
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        bounces={false}
        contentContainerStyle={styles.contentContainerStyle}
      />
    </View>
  );
});
export default ProfileTickets;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  contentContainerStyle: {
    paddingBottom: 20,
  },
});
