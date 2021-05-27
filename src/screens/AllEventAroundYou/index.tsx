import React, {memo, useCallback, useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import MapView, {Circle, Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import UserLocation from 'svgs/UserLocation';
import EventItem from 'components/EventItem';
import {eventLocation} from '../../data/eventLocation';
import PinLocation from 'svgs/PinLocation';
import ButtonFilter from 'components/buttons/ButtonFilter';
import {useNavigation} from '@react-navigation/native';
import MapButton from 'components/buttons/MapButton';
import ROUTES from 'ultis/routes';

export const userLocation = {
  latitude: 37.78825,
  longitude: -122.4324,
};
export const initialLatitudeDelta = 0.01202;
export const initialLongitudeDelta = 0.00081;
export const initialRadius = 1000;

const AllEventAroundYou = memo(() => {
  const navigation = useNavigation();
  const initialRegion = {
    ...userLocation,
    latitudeDelta: initialLatitudeDelta,
    longitudeDelta: initialLongitudeDelta,
  };
  const [color, setColor] = useState('#000');
  const [region, setRegion] = useState(initialRegion);

  const onPressBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);
  const onFillter = useCallback(() => {
    navigation.navigate(ROUTES.Filter);
  }, [navigation]);
  const onPressDirection = useCallback(() => {}, []);
  const description = ["Youth for Climate will travel through the Rue de la Loi in Brussels in the afternoon between 1:00 and 3:00 PM, hoping to create a sense of urgency in regards to climate change.“We have still not encountered any political action towards a liveable world,” said Anuna De Wever, a Belgian climate activist and one of the leading figures in the climate movement in Belgium.“We are once again joining forces and demanding certainty for a sustainable and inclusive future for everyone.” Let’s play the silent game, but this time you have to dance under the stars with hundreds…",
  "A generation of young activists eager to set the agenda on global warming and clean energy should seek government jobs as a way to get lagging climate goals back on track, a top UN energy official said on Tuesday, February 9.We can't keep doing things from outside, Damilola Ogunbiyi, co-chair of UN Energy and chief executive of Sustainable Energy for All (SEforAll), told an online youth summit on achieving universal clean energy access. With the world falling behind on goals to bring clean, affordable energy to billions more people by 2030, changing the minds of leaders has to happen inside and outside government, said Ogunbiyi, a former Nigerian rural electrification director.",
  "The recent Black Lives Matter protests peaked on June 6, when half a million people turned out in nearly 550 places across the United States. That was a single day in more than a month of protests that still continue to today.","Four recent polls — including one released this week by Civis Analytics, a data science firm that works with businesses and Democratic campaigns — suggest that about 15 million to 26 million people in the United States have participated in demonstrations over the death of George Floyd and others in recent weeks."
] 
  useEffect(() => {
    setColor('rgba(255, 0, 0, 0.2)');
  }, []);

  return (
    <View style={styles.mapView}>
      <View style={styles.mapContainer}>
        <MapView
          initialRegion={region}
          provider={PROVIDER_GOOGLE}
          style={styles.mapStyle}>
          <Marker coordinate={userLocation} tracksViewChanges={false}>
            <UserLocation />
          </Marker>
          <Circle
            center={userLocation}
            radius={initialRadius}
            strokeColor={color}
            fillColor={color}
            zIndex={2}
            strokeWidth={1}
          />
          {eventLocation.map(item => (
            <Marker
              coordinate={item.coordinate}
              key={item.id}
              tracksViewChanges={false}>
              <PinLocation />
            </Marker>
          ))}
        </MapView>
        <ButtonFilter onPress={onFillter} style={styles.filterButton} />
        <MapButton
          onBack={onPressBack}
          onDirection={onPressDirection}
          style={styles.mapBtnStyle}
        />
      </View>
      <View style={styles.eventView}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          style={styles.scroll}>
            <EventItem
            thumbnail={require('@assets/EventAroundU/BlackLivesMatter.jpg')}
            tag={['#nightlife']}
            reviewTimes={1.3}
            eventName={'BlackLivesMatter'}
            location={'605 W 48th Street, Manhattan...'}
            distance={10}
            currentAttending={2500}
            maxAttending={10000}
            save={false}
            marginLeft={24}
            isSmallItem={true}
            description={description[2]}
          />
          <EventItem
            thumbnail={require('@assets/EventAroundU/Youth.png')}
            tag={['#art', '#festival']}
            reviewTimes={1.3}
            eventName={'Youth for climate'}
            location={'3 South Sherman Street…'}
            distance={15}
            currentAttending={19}
            maxAttending={5000}
            save={false}
            marginLeft={24}
            isSmallItem={true}
            description={description[0]}
          />
          <EventItem
            thumbnail={require('@assets/EventAroundU/image_Y.jpg')}
            tag={['#culture']}
            reviewTimes={1.3}
            eventName={'Elimination of Racial Discrimination'}
            location={'Tobacco Dock, London'}
            distance={15}
            currentAttending={19}
            maxAttending={5000}
            save={false}
            marginLeft={24}
            isSmallItem={true}
            description={description[1]}
          />
          
        </ScrollView>
      </View>
    </View>
  );
});
export default AllEventAroundYou;

const styles = StyleSheet.create({
  mapView: {
    width: '100%',
    flex: 1,
  },
  mapStyle: {
    width: '100%',
    flex: 1,
  },
  mapContainer: {flex: 1, alignItems: 'center'},
  filterButton: {zIndex: 6},
  buttonIcon: {
    position: 'absolute',
    bottom: 24,
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    flexDirection: 'row',
    width: '100%',
  },
  eventView: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 16,
    
  },
  scroll: {
    width: '100%',
  },
  mapBtnStyle: {
    bottom: 24,
  },
});
