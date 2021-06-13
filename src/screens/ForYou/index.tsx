import React, { memo, useEffect, useState, useContext } from "react";
import { ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import UserItem from "../../components/UserItem";
import AsyncStorage from "@react-native-community/async-storage";
import { getFollowedOrganizations } from "redux/actions";
import { FlatList } from "react-native-gesture-handler";
import { IMAGE_URL } from "services";

const ForYou = memo(() => {
  const dispatch = useDispatch();
  const [token, setToken] = useState("");
  const { allFollowed_organizations } = useSelector(
    (state) => state.followorganization
  );
  useEffect(() => {
    AsyncStorage.getItem("token").then((value) => {
      console.log("value", value);

      setToken(value);
      dispatch(getFollowedOrganizations(value));
    });
  }, []);
  const _renderItem = ({ item }) => {
    return (
      <UserItem
        image={{ uri: `${IMAGE_URL}${item.logo}` }}
        name={item.username}
        numberFollower={item.followers.length}
        follow={true}
        id={item._id}
      />
      // <UserItem
      //   image={require("../../assets/Followers/Femma.png")}
      //   name={"Femma"}
      //   numberFollower={"944"}
      // />
      // <UserItem
      //   image={require("../../assets/Followers/rosa_logo.jpg")}
      //   name={"Rosa"}
      //   numberFollower={"641"}
      // />
    );
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <FlatList
        data={allFollowed_organizations}
        renderItem={_renderItem}
      ></FlatList>
    </ScrollView>
  );
});

export default ForYou;
