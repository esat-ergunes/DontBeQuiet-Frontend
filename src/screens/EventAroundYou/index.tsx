import React, { memo, useCallback, useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  RefreshControl,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import IconAroundU from "svgs/IconAroundU";
import FONTS from "ultis/fonts";
import { useNavigation } from "@react-navigation/native";
import ROUTES from "ultis/routes";
import EventItem from "components/EventItem";
import ButtonFilter from "components/buttons/ButtonFilter";

import { width_screen } from "ultis/dimensions";
import { getBottomSpace } from "react-native-iphone-x-helper";
import jwtDecode from "jwt-decode";
import AsyncStorage from "@react-native-community/async-storage";
import {
  getAlleventsByFollowedOrg,
  getAlleventsByInterestRequest,
  getAllSpecificOrganizations,
} from "redux/actions";
import { FlatList } from "react-native-gesture-handler";
import { baseURL, IMAGE_URL } from "services";

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}


const EventAroundYou = memo(() => {
  



  const { alleventsbyfollowed_organizations } = useSelector(
    (state) => state.event
  );
  const { events_byOrganization } = useSelector(
    (state) => state.allOrganization
  );
  const { token } = useSelector(
    (state) => state.token
  );
  const [decoded, setDecoded] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    AsyncStorage.getItem("token").then((value) => {
      const decodeData = jwtDecode(value);
      setDecoded(decodeData);
      if (decodeData.default !== true) {
        dispatch(getAlleventsByFollowedOrg(value));
      } else {
        dispatch(getAllSpecificOrganizations(decodeData?.uid, value));
      }
    });
  }, []);
  const navigation = useNavigation();
  const onPressFilter = useCallback(() => {
    navigation.navigate(ROUTES.Filter);
  }, [navigation]);

  const onPressAllEventAroundYou = useCallback(() => {
    navigation.navigate(ROUTES.AllEventAroundYou);
  }, [navigation]);

  const [refreshing, setRefreshing] = React.useState(false);

  

  const description = [
    "Youth for Climate will travel through the Rue de la Loi in Brussels in the afternoon between 1:00 and 3:00 PM, hoping to create a sense of urgency in regards to climate change.“We have still not encountered any political action towards a liveable world,” said Anuna De Wever, a Belgian climate activist and one of the leading figures in the climate movement in Belgium.“We are once again joining forces and demanding certainty for a sustainable and inclusive future for everyone.” Let’s play the silent game, but this time you have to dance under the stars with hundreds…",
    "A generation of young activists eager to set the agenda on global warming and clean energy should seek government jobs as a way to get lagging climate goals back on track, a top UN energy official said on Tuesday, February 9.We can't keep doing things from outside, Damilola Ogunbiyi, co-chair of UN Energy and chief executive of Sustainable Energy for All (SEforAll), told an online youth summit on achieving universal clean energy access. With the world falling behind on goals to bring clean, affordable energy to billions more people by 2030, changing the minds of leaders has to happen inside and outside government, said Ogunbiyi, a former Nigerian rural electrification director.",
    "The recent Black Lives Matter protests peaked on June 6, when half a million people turned out in nearly 550 places across the United States. That was a single day in more than a month of protests that still continue to today.Four recent polls — including one released this week by Civis Analytics, a data science firm that works with businesses and Democratic campaigns — suggest that about 15 million to 26 million people in the United States have participated in demonstrations over the death of George Floyd and others in recent weeks.",
  ];
  const _renderItem = ({ item }) => {
    console.log(item);
    return (
      <EventItem
        thumbnail={{ uri: `${IMAGE_URL}${item.photo}` }}
        tag={item.tags}
        reviewTimes={1.3}
        eventName={item.title}
        location={item.place}
        description={item.description}
        distance={10}
        currentAttending={2500}
        maxAttending={10000}
        save={false}
        price={0}
        id={item?._id}
      />
    );
  };
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
    dispatch(getAlleventsByFollowedOrg(token))
  }, []);
  return (
    <View style={styles.container}>
      
      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}
      
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      }
      >
        <TouchableOpacity
          style={styles.headerForU}
          onPress={onPressAllEventAroundYou}
        >
          <IconAroundU />
          <Text style={styles.textHeaderForU}>
            See All Event Around You - 10km
          </Text>
        </TouchableOpacity>
        {(alleventsbyfollowed_organizations !== null &&
          alleventsbyfollowed_organizations !== undefined) ||
        (events_byOrganization !== null &&
          events_byOrganization !== undefined) ? (
          <FlatList
            data={
              decoded?.default !== true
                ? alleventsbyfollowed_organizations
                : events_byOrganization
            }
            renderItem={_renderItem}
          ></FlatList>
        ) : (
          <Text>No items, Please Follow Organizations</Text>
        )}
        
      </ScrollView>
      <ButtonFilter onPress={onPressFilter} />
    </View>
  );
});

export default EventAroundYou;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 24,
    backgroundColor: "#fff",
  },
  scroll: {
    width: "100%",
  },
  headerForU: {
    flexDirection: "row",
    height: 42,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 100,
    marginVertical: 14,
    width: "90%",
    alignSelf: "center",
    /*---------------- */
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.19,
    shadowRadius: 3,

    elevation: 5,
  },
  textHeaderForU: {
    marginLeft: 16,
    color: "black",
    fontSize: 14,
    fontFamily: FONTS.Regular,
  },
  linear: {
    position: "absolute",
    bottom: getBottomSpace() + 8,
    width: width_screen - 48,
    height: 50,
    alignSelf: "center",
    borderRadius: 100,
  },
});
