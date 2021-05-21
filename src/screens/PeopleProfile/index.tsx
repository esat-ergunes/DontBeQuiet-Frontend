import React, {memo} from 'react';
import {Animated, StyleSheet, View} from 'react-native';
import ThemeUtils from 'ultis/themeUtils';
import Color from 'ultis/color';
import ActivityItem from 'screens/ProfileActivity/components/ActivityItem';
import {getBottomSpace, getStatusBarHeight} from 'react-native-iphone-x-helper';
import data from 'screens/PeopleProfile/datas';
import HeaderPeopleProfile from 'screens/PeopleProfile/components/HeaderPeopleProfile';
import Header from 'screens/PeopleProfile/components/Header';
import SvgChatOption from '../../svgs/PeopleProfile/SvgChatOption';
import { Text } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

const item = {
  coverImage: require('../../assets/PeopleProfile/img.png'),
  avatar: require('../../assets/PeopleProfile/Charlotte.png'),
  userName: 'Charlotte Gregory',
  address: 'Manhattan, NY',
  followers: '1.5M',
  following: 5,
  interested: ['#art', '#festival', '#fashion'],
};

const PeopleProfile = memo(() => {
  const scrollY = new Animated.Value(0);

  return (
    <View style={styles.container}>
      <Header
        svgGoBack={true}
        onPress={() => null}
        svg = {false}
        scrollY={scrollY}
        title={item.userName}
      />
      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        overScrollMode={'never'}
        style={{zIndex: 10}}
        scrollEventThrottle={16}
        onScroll={Animated.event([
          {
            nativeEvent: {contentOffset: {y: scrollY}},
          },
        ])}
        bounces={false}>
        <HeaderPeopleProfile
          coverImage={item.coverImage}
          avatar={item.avatar}
          userName={item.userName}
          address={item.address}
          followers={item.followers}
          following={item.following}
          interested={item.interested}
        />
       
          <ScrollView style={{height:500}}
          
          showsVerticalScrollIndicator={false}

          >
          <Text>INSTA image</Text>
          <Text>INSTA image</Text>
          <Text>INSTA image</Text>
          <Text>INSTA image</Text>
          <Text>INSTA image</Text>
          <Text>INSTA image</Text>
          <Text>INSTA image</Text>
          <Text>INSTA image</Text>
          <Text>INSTA image</Text>
          <Text>INSTA image</Text>
          <Text>INSTA image</Text>
          <Text>INSTA image</Text>
          <Text>INSTA image</Text>
          <Text>INSTA image</Text>
          <Text>INSTA image</Text>
          <Text>INSTA image</Text>
          <Text>INSTA image</Text>
          <Text>INSTA image</Text>
          <Text>INSTA image</Text>
          <Text>INSTA image</Text>
          <Text>INSTA image</Text>
          <Text>INSTA image</Text>
          <Text>INSTA image</Text>
          <Text>INSTA image</Text>
          <Text>INSTA image</Text>
          <Text>INSTA image</Text>
          <Text>INSTA image</Text>
          <Text>INSTA image</Text>
          <Text>INSTA image</Text>
          <Text>INSTA image</Text>
          <Text>INSTA image</Text>
          <Text>INSTA image</Text>
          <Text>INSTA image</Text>
          <Text>INSTA image</Text>
          <Text>INSTA image</Text>
          <Text>INSTA image</Text>
          <Text>INSTA image</Text>
          <Text>INSTA image</Text>
          <Text>INSTA image</Text>
          <Text>INSTA image</Text>

        </ScrollView>
        
     

        <View style={{marginVertical:40, display:"flex",alignItems:"center"}}>
          <TouchableOpacity style={{backgroundColor:"green",paddingHorizontal:100,borderRadius:100,height:50,justifyContent:"center",alignItems:"center"}}>
            <Text>DONATION</Text>
          </TouchableOpacity>
        </View>
      </Animated.ScrollView>
      
    </View>
  );
});
export default PeopleProfile;
const HEADER_IMAGE_HEIGHT = ThemeUtils.relativeHeight(30);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: getBottomSpace() + 5,
    backgroundColor:"white"
  },
  /*header style*/
  headerLeftIcon: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: ThemeUtils.relativeWidth(2),
  },
  headerRightIcon: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: ThemeUtils.relativeWidth(2),
  },
  headerStyle: {
    paddingTop: getStatusBarHeight(true),
    height: ThemeUtils.APPBAR_HEIGHT + getStatusBarHeight(true),
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 100,
    position: 'absolute',
  },
  headerTitle: {
    textAlign: 'center',
    justifyContent: 'center',
    color: Color.HEADER_TEXT_COLOR,
    fontSize: ThemeUtils.fontNormal,
    flex: 1,
  },
  /*Top Image Style*/
  headerImageStyle: {
    height: HEADER_IMAGE_HEIGHT,
    width: '100%',
    top: 0,
    alignSelf: 'center',
    position: 'absolute',
    zIndex: -1,
    backgroundColor: 'blue',
  },
  /*profile image style*/
  profileImage: {
    position: 'absolute',
    zIndex: 100,
  },
  /*profile title style*/
  profileTitle: {
    position: 'absolute',
    zIndex: 100,
    textAlign: 'center',
    color: Color.BLACK,
    top: ThemeUtils.relativeHeight(35),
    left: 0,
    right: 0,
    fontSize: ThemeUtils.fontXLarge,
  },
  /*song count text style*/
  songCountStyle: {
    position: 'absolute',
    textAlign: 'center',
    fontWeight: '400',
    top: ThemeUtils.relativeHeight(40),
    left: 0,
    right: 0,
    fontSize: ThemeUtils.fontNormal,
  },
  artistCardContainerStyle: {
    backgroundColor: Color.CARD_BG_COLOR,
    elevation: 5,
    shadowRadius: 3,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    padding: 15,
    marginVertical: ThemeUtils.relativeWidth(1),
    marginHorizontal: ThemeUtils.relativeWidth(2),
    flexDirection: 'row',
    alignItems: 'center',
  },
  artistImage: {
    height: ThemeUtils.relativeWidth(15),
    width: ThemeUtils.relativeWidth(15),
    borderRadius: ThemeUtils.relativeWidth(7.5),
  },
  songTitleStyle: {
    fontSize: ThemeUtils.fontNormal,
    color: Color.BLACK,
  },
  cardTextContainer: {
    flex: 1,
    margin: ThemeUtils.relativeWidth(3),
  },
});
