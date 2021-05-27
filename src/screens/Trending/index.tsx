import React, {memo, useCallback} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ROUTES from '../../ultis/routes';
import ButtonFilter from '../../components/buttons/ButtonFilter';
import EventItem from '../../components/EventItem';
import keyExtractor from '../../ultis/keyExtractor';

const description = ["Youth for Climate will travel through the Rue de la Loi in Brussels in the afternoon between 1:00 and 3:00 PM, hoping to create a sense of urgency in regards to climate change.“We have still not encountered any political action towards a liveable world,” said Anuna De Wever, a Belgian climate activist and one of the leading figures in the climate movement in Belgium.“We are once again joining forces and demanding certainty for a sustainable and inclusive future for everyone.” Let’s play the silent game, but this time you have to dance under the stars with hundreds…",
  "A generation of young activists eager to set the agenda on global warming and clean energy should seek government jobs as a way to get lagging climate goals back on track, a top UN energy official said on Tuesday, February 9.We can't keep doing things from outside, Damilola Ogunbiyi, co-chair of UN Energy and chief executive of Sustainable Energy for All (SEforAll), told an online youth summit on achieving universal clean energy access. With the world falling behind on goals to bring clean, affordable energy to billions more people by 2030, changing the minds of leaders has to happen inside and outside government, said Ogunbiyi, a former Nigerian rural electrification director.",
  "The recent Black Lives Matter protests peaked on June 6, when half a million people turned out in nearly 550 places across the United States. That was a single day in more than a month of protests that still continue to today.Four recent polls — including one released this week by Civis Analytics, a data science firm that works with businesses and Democratic campaigns — suggest that about 15 million to 26 million people in the United States have participated in demonstrations over the death of George Floyd and others in recent weeks."
] 

const data = [
  {
    thumbnail: require('@assets/Trending/1.png'),
    tag: ['#dieren #dierenrecheten #natuur'],
    reviewTimes: 1.2,
    eventName: 'Europe close dolphinaria',
    location: '1000 Brussel',
    distance: 4,
    currentAttending: 19,
    maxAttending: 5000,
    save: false,
    description:description[2],
    
  },
  {
    thumbnail: require('@assets/Trending/5.png'),
    tag: ['#gelijkheid #dierenrecheten #mensen'],
    reviewTimes: 2.4,
    eventName: 'Equality for all!',
    location: '9000 Gent',
    distance: 2.5,
    currentAttending: 2568,
    maxAttending: 10000,
    save: false,
    description:description[0],
    
  },
  {
    thumbnail: require('@assets/Trending/4.png'),
    tag: ['#gelijkheid', '#mensenrechten'],
    reviewTimes: 1.2,
    eventName: 'Weet wie je eet!!',
    location: '100 Brussel',
    distance: 4,
    currentAttending: 2568,
    maxAttending: 5000,
    save: false,
    description:description[1],
    timeCountDown: '7 Days 06 Hours 27 Mins 44 secs',
  },
];

const Trending = memo(() => {
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
        description={description[1]}
        
      />
    );
  }, []);
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.scroll}
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}
      />
      <ButtonFilter onPress={onPressFilter} />
    </View>
  );
});

export default Trending;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 24,
    backgroundColor: '#FFF',
  },
  scroll: {
    width: '100%',
  },
  contentContainerStyle: {
    paddingTop: 24,
  },
});
