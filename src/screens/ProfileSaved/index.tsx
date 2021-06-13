import React, { memo, useCallback, useEffect } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import EventItem from "components/EventItem";
import keyExtractor from "ultis/keyExtractor";
import { useDispatch, useSelector } from "react-redux";
import { getAlllikeAction } from "redux/actions";
import { Text } from "react-native-svg";
import { IMAGE_URL } from "services";

const data = [
  {
    thumbnail: require("@assets/EventAroundU/Youth.png"),
    tag: ["#fashion", "#convention"],
    reviewTimes: 2.4,
    eventName: "Yout for climate",
    location: "The Grand Connaught Rooms...",
    distance: 3.5,
    currentAttending: 2568,
    maxAttending: 10000,
    save: true,
  },
  {
    thumbnail: require("@assets/EventAroundU/BlackLivesMatter.jpg"),
    tag: ["#nightlife"],
    reviewTimes: 1.3,
    eventName: "BlackLivesMatter",
    location: "605 W 48th Street, Manhattan...",
    distance: 10,
    currentAttending: 2500,
    maxAttending: 10000,
    save: true,
  },
  {
    thumbnail: require("@assets/EventAroundU/image_Y.jpg"),
    tag: ["#Fashion", "#Convention"],
    reviewTimes: 2.4,
    eventName: "Elimination of Racial Discrimination",
    location: "The Grand Connaught Rooms...",
    distance: 3.5,
    currentAttending: 2568,
    maxAttending: 10000,
    save: true,
  },
];

const ProfileSaved = memo(() => {
  const { all_likedevents } = useSelector((state) => state.like);
  const { token } = useSelector((state) => state.token);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAlllikeAction(token));
  }, []);
  const renderItem = useCallback(({ item }) => {
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
        thumbnail={{ uri: `${IMAGE_URL}${item?.photo}` }}
        tag={item?.tags}
        reviewTimes={reviewTimes}
        eventName={item?.title}
        location={location}
        distance={distance}
        currentAttending={currentAttending}
        maxAttending={maxAttending}
        save={true}
        id={item?._id}
      />
    );
  }, []);
  return (
    <View style={styles.container}>
      {all_likedevents !== [] && all_likedevents !== undefined ? (
        <FlatList
          data={all_likedevents}
          showsVerticalScrollIndicator={false}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          bounces={false}
          contentContainerStyle={styles.contentContainerStyle}
        />
      ) : (
        <Text>No Liked Events</Text>
      )}
    </View>
  );
});
export default ProfileSaved;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: "#FFF",
  },
  contentContainerStyle: {
    paddingTop: 14,
    paddingBottom: 20,
  },
});
