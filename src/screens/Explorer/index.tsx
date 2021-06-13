import React, {
  memo,
  useCallback,
  useEffect,
  useState,
  useContext,
} from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { width_screen } from "../../ultis/dimensions";
import FONTS from "../../ultis/fonts";
import SvgBack from "../../svgs/People/SvgBack";
import TopHostItem from "../../screens/Explorer/components/TopItem";
import keyExtractor from "../../ultis/keyExtractor";
import UserItem from "../../components/UserItem";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrganizations } from "redux/actions";
import AsyncStorage from "@react-native-community/async-storage";
import { Context as AuthContext } from "../../context/AuthContext";

interface Props {
  onPress: () => null;
}

const data = [
  {
    img: require("../../assets/Followers/AnimalRights.png"),
    userName: "AnimalRights",
    follower: "860K",
  },
  {
    img: require("../../assets/Followers/Youth.jpg"),
    userName: "Youth",
    follower: "1.5M",
  },
  {
    img: require("../../assets/Followers/DierenHulp.jpg"),
    userName: "DierenHulp",
    follower: "35K",
  },
];

const Explorer = memo((props: Props) => {
  const { all_organizations } = useSelector((state) => state.allOrganization);
  const { token } = useSelector((state) => state.token);

  const dispatch = useDispatch();
  useEffect(() => {
    AsyncStorage.getItem("token").then((value) => {
      console.log("value", value);

      dispatch(getAllOrganizations(value));
    });
  }, []);
  const renderItem = useCallback(({ item }) => {
    const { img, userName, follower } = item;
    return <TopHostItem img={img} userName={userName} follower={follower} />;
  }, []);
  const header = useCallback(() => {
    return (
      <>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={data}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          contentContainerStyle={styles.contentContainerStyle}
        />
        <Text style={styles.txtMaybe}>MAYBE YOU LIKE</Text>
      </>
    );
  }, [props.onPress, renderItem]);

  const renderUserItem = useCallback(({ item }) => {
    return (
      <UserItem
        image={item.pictures}
        name={item.username}
        numberFollower={item.followers.length}
        token={token}
        id={item._id}
        follow={false}
      />
    );
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={all_organizations}
        renderItem={renderUserItem}
        keyExtractor={keyExtractor}
        ListHeaderComponent={header}
      />
    </View>
  );
});
const dataUser = [
  {
    image: require("assets/Followers/kifkif.jpg"),
    name: "KifKif",
    numberFollower: "34K",
  },
  {
    image: require("assets/Followers/Viva.jpg"),
    name: "Viva",
    numberFollower: "32K",
  },
  {
    image: require("assets/Followers/eva.png"),
    name: "Eva",
    numberFollower: "22K",
  },
  {
    image: require("assets/Followers/Wervel.png"),
    name: "Wervel",
    numberFollower: "32K",
  },
];
export default Explorer;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    flex: 1,
  },
  topView: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: width_screen,
    height: 50,
    paddingLeft: 0.04 * width_screen,
    paddingRight: 0.06 * width_screen,
    alignItems: "center",
  },
  viewMore: {
    flexDirection: "row",
    alignItems: "center",
  },
  txtTopHost: {
    fontFamily: FONTS.Medium,
    fontSize: 14,
    color: "#7F8FA6",
  },
  txtViewMore: {
    fontFamily: FONTS.Regular,
    fontSize: 14,
    color: "#ED3269",
  },
  txtMaybe: {
    paddingLeft: 0.04 * width_screen,
    fontFamily: FONTS.Medium,
    fontSize: 14,
    color: "#7F8FA6",
  },
  contentContainerStyle: {
    paddingBottom: 30,
  },
});
