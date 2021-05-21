import React, {memo, useCallback} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ROUTES from 'ultis/routes';
import {headerBackground} from 'nav/Main';
import {StyleSheet, Text, TouchableOpacity, View,FlatList} from 'react-native';
import TicketItem from 'screens/ProfileTickets/components/TicketItem';
import {useNavigation} from '@react-navigation/native';
import FONTS from 'ultis/fonts';
import keyExtractor from 'ultis/keyExtractor';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
const dataUpcoming = [
    {
      img: require('../../../assets/EventAroundU/BlackLivesMatter.jpg'),
      titlePost: '"Bottled Art" Wine Painting\n' + ' Night',
      timePost: 'SUN, MAR. 25  -  4:30 PM EST',
    },
    {
      img: require('../../../assets/EventAroundU/Youth.png'),
      titlePost: 'Win 2 tickets to WWE @ MSG',
      timePost: 'SUN, MAR. 25  -  4:30 PM EST',
    },
    {
      img: require('../../../assets/ProfileActivity/MSG.png'),
      titlePost: '"Bottled Art" Wine Painting\n' + ' Night',
      timePost: 'SUN, MAR. 30  -  4:30 PM EST',
    },
    
    
  ];


  const dataPast = [
    {
      img: require('../../../assets/ProfileActivity/WWE.png'),
      titlePost: '"Bottled Art" Wine Painting\n' + ' Night',
      timePost: 'SUN, MAR. 25  -  4:30 PM EST',
    },
    {
      img: require('../../../assets/ProfileActivity/AMC.png'),
      titlePost: 'Win 2 tickets to WWE @ MSG',
      timePost: 'SUN, MAR. 25  -  4:30 PM EST',
    },
    {
      img: require('../../../assets/ProfileActivity/BottledArt.png'),
      titlePost: '"Bottled Art" Wine Painting\n' + ' Night',
      timePost: 'SUN, MAR. 30  -  4:30 PM EST',
    },
    
    
  ];
  
const upcoming = memo(() => {
  const navigation = useNavigation();
  const renderItem = useCallback(({item}) => {
    const {img, titlePost, timePost} = item;
    return <TicketItem img={img} titlePost={titlePost} timePost={timePost} />;
  }, []);
  return (
      <SafeAreaView style={{backgroundColor:"white", height:"100%"}}>
          <ScrollView
          showsVerticalScrollIndicator={false}
          style={{backgroundColor:"white"}}
          >
    <View style={styles.contentView}>
          <Text style={styles.textTitle}>UPCOMING</Text>
          <View style={styles.aboutContent}>
           
          <FlatList
        data={dataUpcoming}
        showsVerticalScrollIndicator={false}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        bounces={false}
        contentContainerStyle={styles.contentContainerStyle}
      />
          </View>
        </View>
        <View style={styles.contentViewPast}>
          <Text style={styles.textTitle}>PAST EVENTS</Text>
          <View style={styles.aboutContent}>
           <Text style={{textAlign:"center", marginTop:30,color:"gray"}}>You haven't partisipate any event yet.</Text>
           
          </View>
        </View>
        </ScrollView>
        </SafeAreaView>
  );
});

export default upcoming;

const styles = StyleSheet.create({
  
  contentView: {
    marginTop: 24,
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  contentViewPast:{
    marginTop: -10,
    paddingHorizontal: 24,
    
  },
  textTitle: {
    fontFamily: FONTS.Medium,
    fontSize: 14,
    color: 'black',
    marginHorizontal:-10
  },aboutContent: {
    lineHeight: 24,
    fontSize: 14,
    fontFamily: FONTS.Regular,
    color: '#353B48',
    marginTop: 16,
    marginLeft:-20
  },textBtn: {
    color: '#55a437',
    fontFamily: FONTS.Regular,
    fontSize: 14,
  }, contentContainerStyle: {
    paddingBottom: 20,
    
  },
});
