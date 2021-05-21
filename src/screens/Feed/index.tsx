import React, {memo, useCallback} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  RefreshControl
} from 'react-native';
import IconAroundU from 'svgs/IconAroundU';
import FONTS from 'ultis/fonts';
import {useNavigation} from '@react-navigation/native';
import ROUTES from 'ultis/routes';
import EventItem from 'components/EventItem';
import ButtonFilter from 'components/buttons/ButtonFilter';

import {width_screen} from 'ultis/dimensions';
import {getBottomSpace} from 'react-native-iphone-x-helper';

const EventAroundYou = memo(() => {
  const navigation = useNavigation();
  const onPressFilter = useCallback(() => {
    navigation.navigate(ROUTES.Filter);
  }, [navigation]);

  /*const onPressAllEventAroundYou = useCallback(() => {
    navigation.navigate(ROUTES.AllEventAroundYou);
  }, [navigation]);*/

  const description = ["Youth for Climate will travel through the Rue de la Loi in Brussels in the afternoon between 1:00 and 3:00 PM, hoping to create a sense of urgency in regards to climate change.“We have still not encountered any political action towards a liveable world,” said Anuna De Wever, a Belgian climate activist and one of the leading figures in the climate movement in Belgium.“We are once again joining forces and demanding certainty for a sustainable and inclusive future for everyone.” Let’s play the silent game, but this time you have to dance under the stars with hundreds…",
  "A generation of young activists eager to set the agenda on global warming and clean energy should seek government jobs as a way to get lagging climate goals back on track, a top UN energy official said on Tuesday, February 9.We can't keep doing things from outside, Damilola Ogunbiyi, co-chair of UN Energy and chief executive of Sustainable Energy for All (SEforAll), told an online youth summit on achieving universal clean energy access. With the world falling behind on goals to bring clean, affordable energy to billions more people by 2030, changing the minds of leaders has to happen inside and outside government, said Ogunbiyi, a former Nigerian rural electrification director.",
  "description3"
] 


  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}
      >
        <TouchableOpacity
          style={styles.headerForU}
          onPress={()=>{}}>
          <IconAroundU />
          <Text style={styles.textHeaderForU}>
            See All Event Around You - 10km
          </Text>
        </TouchableOpacity>
        
        <EventItem
          thumbnail={require('../../assets/EventAroundU/Youth.png')}
          tag={['#noracismo', '#Reduced_Inequalities']}
          reviewTimes={1.3}
          eventName={'Youth for Climate'}
          location={'Rue de la Loi, Brussels...'}
          description={description[0]}
          distance={10}
          currentAttending={2500}
          maxAttending={10000}
          save={false}
          
          price={0}
        />
        
        <EventItem
          thumbnail={require('../../assets/EventAroundU/image_Y.jpg')}
          tag={['#noracismo', '#convention']}
          reviewTimes={2.4}
          description={description[1]}
          eventName={'Bottled Art" Wine Painting Nigh'}
          location={'The Grand Connaught Rooms...'}
          distance={3.5}
          currentAttending={2568}
          maxAttending={10000}
          save={true}
          
          timeCountDown={'7 Days 06 Hours 27 Mins 44 secs'}
          price={0}
        />
        
        <EventItem
          thumbnail={require('../../assets/EventAroundU/BlackLivesMatter.jpg')}
          tag={['#Fashion', '#Convention']}
          reviewTimes={2.4}
          eventName={'Mahogany Bridal Fair 2016'}
          location={'The Grand Connaught Rooms...'}
          description={description[2]}
          distance={3.5}
          currentAttending={10000}
          maxAttending={10000}
          save={false}
          
          timeCountDown={'7 Days 06 Hours 27 Mins 44 secs'}
          price={120}
        />
      </ScrollView>
      <ButtonFilter onPress={onPressFilter} />
    </View>
  );
});

export default EventAroundYou;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 24,
    backgroundColor: '#fff',
  },
  scroll: {
    width: '100%',
  },
  headerForU: {
    flexDirection: 'row',
    height: 72,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textHeaderForU: {
    marginLeft: 16,
    color: '#ED3269',
    fontSize: 14,
    fontFamily: FONTS.Regular,
  },
  linear:{
    position: 'absolute',
    bottom: getBottomSpace() + 8,
    width: width_screen - 48,
    height: 50,
    alignSelf: 'center',
    borderRadius: 100,
  }
});
