import React, { memo, useCallback, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import SvgFollowed from "../../svgs/Followers/SvgFollowed";
import SvgFollow from "../../svgs/Followers/SvgFollow";
import { width_screen, height_screen } from "../../ultis/dimensions";
import FONTS from "../../ultis/fonts";
import { useNavigation } from "@react-navigation/native";
import ROUTES from "../../ultis/routes";
import { useDispatch, useSelector } from "react-redux";
import {
  followOrganization,
  getFollowedOrganizations,
  UnfollowOrganization,
} from "redux/actions";

interface Props {
  image: any;
  name: string;
  numberFollower: string;
  token: string;
  id: string;
  follow:boolean
}

const UserItem = memo((props: Props) => {

  const onDetail = useCallback(() => {
    console.log("props in on Detail", props);

    navigation.navigate(ROUTES.EventDetail, {
      data: props,
    });
  }, []);


  const { token } = useSelector((state) => state.token);

  const dispatch = useDispatch();
  const [follow, setFollow] = useState(props.follow);
  const onPress = useCallback(() => {
    setFollow(!follow);
    _manipulation();
  }, [follow]);
  const _manipulation = () => {
    if (!follow) {
      const cbSuccess = () => {
        dispatch(getFollowedOrganizations(token));
      };
      dispatch(followOrganization(props.id, token, cbSuccess));
    } else {
      const cbSuccess = () => {
        dispatch(getFollowedOrganizations(token));
      };
      dispatch(UnfollowOrganization(props.id, token, cbSuccess));
    }
  };
  const navigation = useNavigation();
  const onPeopleProfile = useCallback(() => {
    navigation.navigate(ROUTES.PeopleProfile, {
      data: props,
    });
  }, [navigation]);
  return (
    <TouchableOpacity onPress={onPeopleProfile} style={styles.card}>
      <Image style={styles.image} source={props.image} />
      <View style={styles.txtField}>
        <Text style={styles.txtName}>{props.name}</Text>
        <Text style={styles.txtNumberFollower}>
          {props.numberFollower} followers
        </Text>
      </View>
      <TouchableOpacity onPress={onPress} style={styles.svg_Follow}>
        {follow ? <SvgFollowed /> : <SvgFollow />}
      </TouchableOpacity>
    </TouchableOpacity>
  );
});

export default UserItem;

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    width: width_screen,
    paddingVertical: 16,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  image: {
    marginHorizontal: 0.04 * width_screen,
    height: 60,
    width: 60,
  },
  txtName: {
    fontFamily: FONTS.Medium,
    fontSize: 16,
    color: "#353B48",
    marginBottom: 0.01 * height_screen,
  },
  txtNumberFollower: {
    fontFamily: FONTS.Medium,
    fontSize: 14,
    color: "#7F8FA6",
  },
  txtField: {
    flex: 1,
  },
  svg_Follow: {
    marginRight: 0.06 * width_screen,
  },
});
