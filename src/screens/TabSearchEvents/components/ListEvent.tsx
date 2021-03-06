import React, {memo, useCallback} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import keyExtractor from '../../../ultis/keyExtractor';
import EventItem from '../../../components/EventItem';
import ButtonFilter from '../../../components/buttons/ButtonFilter';
import {useNavigation} from '@react-navigation/native';
import ROUTES from '../../../ultis/routes';
import FONTS from '../../../ultis/fonts';

const data = [
  {
    thumbnail: require('../../../assets/SearchEvents/BlackLivesMatter.jpg'),
    tag: ['#No racismo, #equality '],
    reviewTimes: 1.3,
    eventName: 'Black lives matter',
    location: '1000 Bruxelles',
    distance: 10,
    currentAttending: 19,
    maxAttending: 5,
    save: false,
    
    marginLeft: 24,
  },
  
];

interface Props {
  textSearch: string;
}

const ListEvent = memo((props: Props) => {
  const navigation = useNavigation();
  const onPressFilter = useCallback(() => {
    navigation.navigate(ROUTES.Filter);
  }, [navigation]);
  const renderItem = useCallback(({item}) => {
    const {
      thumbnail,
      tag,
      reviewTimes,
      eventName,
      location,
      distance,
      currentAttending,
      maxAttending,
      save,
      rate,
      marginLeft,
    } = item;
    return (
      <EventItem
        thumbnail={thumbnail}
        tag={tag}
        reviewTimes={reviewTimes}
        eventName={eventName}
        location={location}
        distance={distance}
        currentAttending={currentAttending}
        maxAttending={maxAttending}
        save={save}
        rate={rate}
        marginLeft={marginLeft}
      />
    );
  }, []);
  const renderHeader = useCallback(
    () => (
      <Text style={styles.txtHeader}>
        1 results for “{props.textSearch}”
      </Text>
    ),
    [props.textSearch],
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={renderHeader}
      />
      <ButtonFilter style={styles.btn} onPress={onPressFilter} />
    </View>
  );
});

export default ListEvent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btn: {
    alignSelf: 'center',
  },
  txtHeader: {
    marginLeft: 24,
    fontSize: 14,
    fontFamily: FONTS.Regular,
    color: '#353B48',
    marginBottom: 25,
  },
});
