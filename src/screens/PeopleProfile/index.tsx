import React, {memo} from 'react';
import {Animated, Image, StyleSheet, View} from 'react-native';
import ThemeUtils from 'ultis/themeUtils';
import Color from 'ultis/color';
import ActivityItem from 'screens/ProfileActivity/components/ActivityItem';
import {getBottomSpace, getStatusBarHeight} from 'react-native-iphone-x-helper';
import data from 'screens/PeopleProfile/datas';
import HeaderPeopleProfile from 'screens/PeopleProfile/components/HeaderPeopleProfile';
import Header from 'screens/PeopleProfile/components/Header';
import SvgChatOption from '../../svgs/PeopleProfile/SvgChatOption';
import { Text,FlatList, ScrollView, TouchableOpacity  } from 'react-native';
import keyExtractor from '../../ultis/keyExtractor';
import { useRoute } from '@react-navigation/native';

const item = {
  coverImage: require('../../assets/Followers/BiteCover.png'),
  avatar: require('../../assets/Followers/Bite.png'),
  userName: 'rerererer',
  address: 'Bredestraat 134, 3293 Diest',
  following: '0',
  followers: '0',
  interested: ['#dieren', '#dierenrechten ', '#natuur'],
};

const DATA = [
  {
    id:'1',
    img:  require('../../assets/Instapost/1.png'),
   
  },
  {
    id:'2',
    img:  require('../../assets/Instapost/2.png'),
   
  },
  {
    id:'3',
    img:  require('../../assets/Instapost/3.png'),
   
  },
  {
    id:'4',
    img:  require('../../assets/Instapost/4.png'),
   
  },
  {
    id:'5',
    img:  require('../../assets/Instapost/5.png'),
   
  },
  {
    id:'6',
    img:  require('../../assets/Instapost/6.png'),
   
  },
  {
    id:'7',
    img:  require('../../assets/Instapost/7.png'),
   
  },
  {
    id:'8',
    img:  require('../../assets/Instapost/8.png'),
   
  },
  {
    id:'9',
    img:  require('../../assets/Instapost/9.png'),
   
  },
  {
    id:'10',
    img:  require('../../assets/Instapost/10.png'),
   
  }
  
];

const Item = ({ img }) => (
  <View style={{marginTop:8}}>
    <Image 
    style={{width:100,height:100, marginHorizontal:5}}
     source={img}
    
    />
  </View>
);


const PeopleProfile = memo(() => {
  const route = useRoute();
  const renderItem = ({ item }) => (
    <Item img={item.img} />
  );
  const data = route.params?.data;
  //console.log('fdfdfdff',data)
  const numColumns = 3;

  const scrollY = new Animated.Value(0);

  return (
    <View style={styles.container}>
      <Header
        svgGoBack={true}
        onPress={() => null}
        svg = {false}
        scrollY={scrollY}
        title={data.name}
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
          avatar={data.logo}
          userName={data.name}
          //address={item.address}
          followers={data.numberFollower}
          following={data.numberFollower}
          interested={item.interested}
        />
       
          <ScrollView style={{height:320}}
          
          showsVerticalScrollIndicator={false}>
           
          <View style={{marginTop:12, display:"flex",alignItems:"center",justifyContent:"space-around"}}>
          <FlatList
       showsVerticalScrollIndicator={false}
       data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={numColumns}
       
       />


          </View>

        </ScrollView>
        
     

        <View style={{marginBottom:20,marginTop:40, display:"flex",alignItems:"center"}}>
          <TouchableOpacity style={{backgroundColor:"#1D1D1B",paddingHorizontal:100,borderRadius:100,height:50,justifyContent:"center",alignItems:"center"}}>
            <Text style={{color:"#7FFA50"}}>DONATE</Text>
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
