import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import {
  Alert,
  Animated,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Swiper from "react-native-swiper";
import { width_screen } from "ultis/dimensions";
import FONTS from "ultis/fonts";
import { useRoute, useNavigation } from "@react-navigation/native";
import EventName from "components/EventItem/EventName";
import EventBasicInfo from "components/EventItem/EventBasicInfo";
import RateDetail from "components/RateDetail";
import SvgArrowRight from "svgs/EventDetail/SvgArrowRight";
import UserItem from "components/UserItem";
import {
  getBottomSpace,
  getStatusBarHeight,
} from "react-native-iphone-x-helper";
import EventItem from "components/EventItem";
import ButtonLinear from "components/buttons/ButtonLinear";
import HourGlass from "svgs/HourGlass";
import SvgArrowBack from "svgs/EventDetail/SvgArrowBack";
import IconShare from "svgs/IconShare";
import IconUnSave from "svgs/IconUnSave";
import SvgSaved from "svgs/IconSaved";
import ROUTES from "ultis/routes";
import MapLocation from "screens/EventDetail/components/MapLocation";
import LocationView from "screens/EventDetail/components/LocationView";
import { LinearGradient } from "expo-linear-gradient";
import ThemeUtils from "ultis/themeUtils";
import ReadMore from "react-native-read-more-text";
import { HeaderTitle } from "@react-navigation/stack";
import { useDispatch, useSelector } from "react-redux";
import { getAllParticipatedAction, participateAction } from "redux/actions";

const EventDetail = memo(() => {
  const route = useRoute();
  const navigation = useNavigation();
  // @ts-ignore
  console.log("route.params?.data", route.params?.data);

  const data = route.params?.data;
  const { alleventsbyfollowed_organizations } = useSelector(
    (state) => state.event
  );
  console.log("data ==>> ", data);

  const { token } = useSelector((state) => state.token);
  const dispatch = useDispatch();
  const [isSaved, setSaved] = useState(data.save);
  let textBuyButton = "";
  let isAvailable;
  let isAdded = "false";
  if (data.currentAttending < data.maxAttending) {
    isAvailable = true;
    if (data.price && data.price > 0) {
      textBuyButton = `FROM $${data.price} - GET IT`;
    } else {
      textBuyButton = "ADD TO CALENDAR";
    }
  } else {
    textBuyButton = "The list is full. Please select other time";
    isAvailable = false;
  }

  const onSaved = useCallback(() => {
    setSaved(!isSaved);
  }, [isSaved]);
  const onBack = useCallback(() => {
    navigation.goBack();
  }, []);

  const addedtocalendar = useCallback(() => {
    textBuyButton = "Added";
    navigation.navigate(ROUTES.EventAroundYou);
  }, []);
  const onBuy = useCallback(() => {
    const cbSuccess=()=>{dispatch(getAllParticipatedAction(token))}
    dispatch(participateAction(data?.id, token,cbSuccess));
  }, []);
  const onDirection = useCallback(() => {
    navigation.navigate(ROUTES.EventDetailMap);
  }, []);
  const gotoFeed = useCallback(() => {
    if (isAdded) {
      console.log("okayman");
      textBuyButton = "ADDED";
      navigation.navigate(ROUTES.EventDetailMap);
    }
  }, []);

  const scrollY = useRef(new Animated.Value(0)).current;

  const headerHeight = scrollY.interpolate({
    inputRange: [0, 176],
    outputRange: [0, 1],
    extrapolate: "clamp",
  });

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        bounces={false}
        onScroll={Animated.event([
          { nativeEvent: { contentOffset: { y: scrollY } } },
        ])}
      >
        <Swiper
          containerStyle={styles.swiperStyle}
          dotColor={"rgba(255,255,255,0.5)"}
          activeDotColor={"#fff"}
        >
          <View>
            <Image source={data.thumbnail} style={styles.thumbnail} />
          </View>
          <View>
            <Image source={data.thumbnail} style={styles.thumbnail} />
          </View>
          <View>
            <Image source={data.thumbnail} style={styles.thumbnail} />
          </View>
          <View>
            <Image source={data.thumbnail} style={styles.thumbnail} />
          </View>
        </Swiper>
        
        <View style={styles.infoView}>
          <EventName eventName={data.eventName} />
          <EventBasicInfo
            currentAttending={data.currentAttending}
            maxAttending={data.maxAttending}
            eventTime={"SUN, MAR. 25  -  4:30 PM EST"}
            colorAttending={"#353B48"}
          />
        </View>
        <View style={styles.contentView}>
          <Text style={styles.textTitle}>ABOUT</Text>

          <ReadMore
            numberOfLines={3}
            renderTruncatedFooter={_renderTruncatedFooter}
            renderRevealedFooter={_renderRevealedFooter}
            onReady={_handleTextReady}
          >
            <Text style={styles.aboutContent}>{data.description}</Text>
          </ReadMore>

          <View style={styles.flexEnd}></View>
        </View>
        <View style={styles.contentViewNoPadding}>
          <Text style={[styles.textTitle, { paddingHorizontal: 24 }]}>
            ENDORSE
          </Text>
          <UserItem
            image={require("@assets/Followers/Youth.jpg")}
            name={"Youth For Climate"}
            numberFollower={"535"}
          />
        </View>
        <View style={styles.contentViewNoPadding}>
          <View style={styles.locationContainer}>
            <View style={[styles.flexRow, { justifyContent: "space-between" }]}>
              <Text style={styles.textTitle}>LOCATION</Text>
              <TouchableOpacity
                style={styles.detailAboutBtn}
                onPress={onDirection}
              >
                <Text style={styles.textBtn}>How to get there?</Text>
                <SvgArrowRight />
              </TouchableOpacity>
            </View>
            <LocationView location={data.location} distance={data.distance} />
          </View>
          <MapLocation />
        </View>
        <View style={styles.contentView}>
          <Text style={styles.textTitle}>CONTACT</Text>
          <Text style={styles.aboutContent}>
            Send us an email at{" "}
            <Text style={styles.textBtn}>help@YouthForClimate.com</Text> or call
            us at {"\n"}
            <Text style={styles.textBtn} numberOfLines={1}>
              +1 991-682-0200
            </Text>
          </Text>
        </View>

        <View style={styles.buttonView}>
          {isAvailable ? (
            <ButtonLinear
              title={textBuyButton}
              style={styles.bottomButton}
              onPress={onBuy}
            />
          ) : (
            <View style={styles.buttonSoldOut}>
              <Text style={styles.textSoldOut}>{textBuyButton}</Text>
            </View>
          )}
        </View>
      </ScrollView>
      <View style={styles.buttonTopView}>
        <TouchableOpacity onPress={onBack} style={styles.btnBack}>
          <SvgArrowBack />
        </TouchableOpacity>
        <View style={styles.flexRow}>
          <TouchableOpacity>
            <IconShare />
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonSave} onPress={onSaved}>
            {isSaved ? <SvgSaved /> : <IconUnSave />}
          </TouchableOpacity>
        </View>
      </View>
      <Animated.View style={[styles.header, { opacity: headerHeight }]}>
        <LinearGradient
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 1 }}
          style={styles.linear}
          colors={["#1D1D1B", "#1D1D1B"]}
        />
      </Animated.View>
    </View>
  );
});

const _renderTruncatedFooter = (handlePress) => {
  return (
    <Text style={{ color: "#55a437", marginTop: 5 }} onPress={handlePress}>
      Read more
    </Text>
  );
};

const _renderRevealedFooter = (handlePress) => {
  return (
    <Text style={{ color: "#55a437", marginTop: 5 }} onPress={handlePress}>
      Show less
    </Text>
  );
};

const _handleTextReady = () => {
  // ...
};

export default EventDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
    backgroundColor: "#fff",
    paddingBottom: getBottomSpace() + 16,
  },
  textTag: {
    fontSize: 14,
    color: "#7F8FA6",
    marginRight: 8,
    fontFamily: FONTS.Regular,
  },
 
  flexRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  infoView: {
    alignItems: "center",
    flex: 1,
    paddingHorizontal: 24,
  },
  contentView: {
    marginTop: 24,
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  contentViewNoPadding: {
    marginTop: 24,
  },
  textTitle: {
    fontFamily: FONTS.Medium,
    fontSize: 14,
    color: "#7F8FA6",
  },
  aboutContent: {
    lineHeight: 24,
    fontSize: 14,
    fontFamily: FONTS.Regular,
    color: "#353B48",
    marginTop: 16,
  },
  detailAboutBtn: {
    flexDirection: "row",
    alignItems: "center",
  },
  textBtn: {
    color: "#55a437",
    fontFamily: FONTS.Regular,
    fontSize: 14,
  },
  flexEnd: {
    alignItems: "flex-end",
  },
  swiperStyle: {
    width: width_screen,
    height: 252 * (width_screen / 375),
  },
  thumbnail: {
    width: width_screen,
    height: 252 * (width_screen / 375),
  },
  textLocation: {
    fontSize: 16,
    fontFamily: FONTS.Medium,
    color: "#353B48",
    lineHeight: 20,
    marginTop: 8,
  },
  locationContainer: {
    paddingHorizontal: 24,
  },

  buttonView: {
    width: "100%",
    paddingHorizontal: "6.4%",
  },
  bottomButton: {
    height: 50,
    borderRadius: 100,
  },
  scrollHorizontal: {
    marginTop: 16,
  },
  buttonSoldOut: {
    height: 50,
    borderRadius: 100,
    backgroundColor: "#F7F8FA",
    justifyContent: "center",
    alignItems: "center",
  },
  textSoldOut: {
    fontFamily: FONTS.Medium,
    fontSize: 14,
    color: "#7F8FA6",
  },
  countDownView: {
    backgroundColor: "#1DA1F2",
    height: 34 * (width_screen / 375),
    paddingHorizontal: 24,
    flexDirection: "row",
    alignItems: "center",
  },
  textCountDown: {
    fontSize: 12,
    fontFamily: FONTS.Regular,
    color: "#fff",
    marginLeft: 8,
  },
  buttonTopView: {
    zIndex: 99,
    position: "absolute",
    paddingTop: getStatusBarHeight(),
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingRight: 24,
    paddingBottom: 16,
    alignItems: "flex-end",
    height: ThemeUtils.APPBAR_HEIGHT + getStatusBarHeight(true),
  },
  buttonSave: {
    marginLeft: 32,
  },
  btnBack: {
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 24,
  },
  linear: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    width: width_screen,
    position: "absolute",
    top: 0,
    left: 0,
    height: ThemeUtils.APPBAR_HEIGHT + getStatusBarHeight(true),
  },
  gradient: {
    position: "absolute",
    height: 50,
    width: 100,
  },

});
