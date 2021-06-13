import React, {memo, useCallback} from 'react';
import {
  Animated,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {height_screen, width_screen} from 'ultis/dimensions';
import {LinearGradient} from 'expo-linear-gradient';
import FONTS from 'ultis/fonts';
import SvgArrDown from 'svgs/SvgArrDown';
import {useNavigation} from '@react-navigation/native';
import ROUTES from 'ultis/routes';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import ReadMore from 'react-native-read-more-text';

interface Props {
  coverImage: any;
  avatar: any;
  userName: string;
  address: string;
  numberMessage: number;
  rewards: number;
  followers: string;
  following: number;
  interested: string[];
  notification: number;
}

const HeaderProfile = memo((props: Props) => {

  const navigation = useNavigation();
  /*const onInbox = useCallback(() => {
    navigation.navigate(ROUTES.Inbox);
  }, [navigation]);
  const onRewards = useCallback(() => {
    navigation.navigate(ROUTES.Rewards);
  }, [navigation]);
  const onFollower = useCallback(() => {
    navigation.navigate(ROUTES.TabFollowers);
  }, [navigation]);
  const onFollowing = useCallback(() => {
    navigation.navigate(ROUTES.TabFollowers);
  }, [navigation]);*/
  const spin = new Animated.Value(0);
  const rotateInterPolate = spin.interpolate({
    inputRange: [0, 360],
    outputRange: ['0deg', '360deg'],
  });
  const startAnimation = useCallback(() => {
    Animated.timing(spin, {
      toValue: 180,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, [spin]);
  const animatedStyles = {transform: [{rotate: rotateInterPolate}]};

  return (
    <>
      <Image style={styles.coverImage} source={props.coverImage} />
      <LinearGradient
        style={styles.linear}
        colors={['rgba(1, 1, 1, 0.0001)', '#000']}
        start={{x: 0, y: 1}}
        end={{x: 1, y: 1}}
      />
      <View style={styles.mask}>
        <Image style={styles.img} source={props.avatar} />
        <Text style={styles.userName}>{props.userName}</Text>
        <Text style={styles.address}>{props.address}</Text>
        
        <View style={[styles.btn]}>
         
            <Text style={styles.txtNumberFollow}>
            <Text style={styles.txtFollow}> following :</Text>
              {props.following}
            </Text>

        </View>
        <Text style={styles.interested}>Interested in:</Text>
        
        <ReadMore
              numberOfLines={1}
              renderTruncatedFooter={_renderTruncatedFooter}
              renderRevealedFooter={_renderRevealedFooter}
              onReady={_handleTextReady}>
              <Text style={styles.aboutContent}>
              {props.interested.map(item => (
            <Text style={styles.txtInterested}>{item}</Text>
          ))}
          </Text>
            </ReadMore>
        
      </View>
    </>
  );
});
const _renderTruncatedFooter = (handlePress) => {
  return (
    <Text style={{color: "#55a437", marginTop: 5}} onPress={handlePress}>
      Read more
    </Text>
  );
}

const _renderRevealedFooter = (handlePress) => {
  return (
    <Text style={{color: "#55a437", marginTop: 5}} onPress={handlePress}>
      Show less
    </Text>
  );
}

const _handleTextReady = () => {
  // ...
}

export default HeaderProfile;

const styles = StyleSheet.create({
  headerProfile: {
    backgroundColor: '#FFF',
  },
  coverImage: {
    width: width_screen,
    height: 0.31 * height_screen,
    marginTop: '-0.1%',
  },
  linear: {
    width: width_screen,
    height: 0.31 * height_screen,
    position: 'absolute',
    opacity: 0.4,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: {width: 0, height: 4},
  },
  icon: {
    position: 'absolute',
    flexDirection: 'row',
    marginTop: getStatusBarHeight() + 10,
    alignItems: 'center',
    alignSelf: 'flex-end',
    width: 0.22 * width_screen,
    justifyContent: 'space-between',
    height: 50,
    right: 8,
  },
  mask: {
    width: 0.87 * width_screen,
    height: 340,
    backgroundColor: '#FFF',
    alignSelf: 'center',
    marginTop: -0.06 * height_screen,
    borderRadius: 10,
    shadowColor: 'rgba(0, 0, 0, 0.08)',
    shadowOffset: {width: 5, height: 10},
    shadowOpacity: 0.3,
    marginBottom: 32,
  },
  img: {
    width: 104,
    height: 104,
    borderRadius: 100,
    borderColor: 'rgba(255, 255, 255, 0.4)',
    marginTop: -0.06 * height_screen,
    overflow: 'hidden',
    alignSelf: 'center',
  },
  userName: {
    fontFamily: FONTS.Medium,
    fontSize: 16,
    color: '#353B48',
    marginTop: 16,
    marginBottom: 7,
    alignSelf: 'center',
  },
  address: {
    fontFamily: FONTS.Regular,
    fontSize: 14,
    color: '#7F8FA6',
    alignSelf: 'center',
  },
  inbox: {
    width: 88,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#7F8FA6',
    borderRadius: 100,
  },
  rewards: {
    width: 142,
    height: 40,
    backgroundColor: '#ED3269',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
    height: 0.1 * height_screen,
    borderBottomWidth: 1,
    borderBottomColor: '#F7F8FA',
  },
  txtInbox: {
    fontFamily: FONTS.Medium,
    fontSize: 12,
    color: '#7F8FA6',
  },
  txtRewards: {
    fontFamily: FONTS.Medium,
    fontSize: 12,
    color: '#FFF',
  },
  numberMessage: {
    height: 16,
    width: 16,
    borderRadius: 8,
    backgroundColor: '#ED3269',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    right: 6,
    top: -8,
  },
  txtNumberMessage: {
    fontFamily: FONTS.Medium,
    fontSize: 12,
    color: '#FFF',
  },
  followStyle: {
    flexDirection: 'row',
    marginLeft: 30,
    fontFamily: FONTS.Medium,
    fontSize: 14,
    color: '#353B48',
    marginTop: 16,
  },
  followers: {
    marginRight: 40,
  },
  txtFollow: {
    fontFamily: FONTS.Regular,
    fontSize: 12,
    color: '#7F8FA6',
  },
  txtNumberFollow: {
    fontFamily: FONTS.Medium,
    fontSize: 14,
    color: '#353B48',
  },
  interested: {
    fontFamily: FONTS.Regular,
    fontSize: 12,
    color: '#7F8FA6',
    marginTop: 16,
   
  },
  tagStyle: {
    flexDirection: 'row',
    marginLeft: 30,
    marginTop: 8,
  },
  txtInterested: {
    fontFamily: FONTS.Regular,
    fontSize: 14,
    color: '#353B48',
    marginRight: 8,
  
  },
  arrDown: {
    alignSelf: 'flex-end',
    marginRight: 24,
    bottom: 24,
    height: 30,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
