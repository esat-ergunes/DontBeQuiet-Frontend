import React, { memo, useCallback, useEffect, useState } from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
} from "react-native";
import keyExtractor from "ultis/keyExtractor";
import { useNavigation } from "@react-navigation/native";
import ButtonLinear from "components/buttons/ButtonLinear";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { width_screen } from "ultis/dimensions";
import ROUTES from "ultis/routes";
import HashtagItem from "../../screens/SelectHashtag/components/HashtagItem";
import AsyncStorage from "@react-native-community/async-storage";
import dontBeQuietApi from "../../api/dontBequiet";
import { ScrollView } from "react-native-gesture-handler";
//redux imports
import { useDispatch, useSelector } from "react-redux";
import { interestRequest } from "redux/actions";

/*const data = [
    {
      source: require('../../assets/SelectHashtag/1.png'),
      title: '#No Povrety',
      des: '3.4K+ events',
    },
    {
      source: require('../../assets/SelectHashtag/2.png'),
      title: '#Zero Hunger',
      des: '1K+ events',
    },
    {
      source: require('../../assets/SelectHashtag/3.png'),
      title: '#Good Health and Well-being',
      des: '1K+ events',
    },
    {
      source: require('../../assets/SelectHashtag/4.png'),
      title: '#Good Health and Well-being',
      des: '1K+ events',
    },
    {
      source: require('../../assets/SelectHashtag/5.png'),
      title: '#Good Health and Well-being',
      des: '1K+ events',
    },
    {
      source: require('../../assets/SelectHashtag/6.png'),
      title: '#Good Health and Well-being',
      des: '1K+ events',
    },{
      source: require('../../assets/SelectHashtag/7.png'),
      title: '#Good Health and Well-being',
      des: '1K+ events',
    },
    {
      source: require('../../assets/SelectHashtag/8.png'),
      title: '#Good Health and Well-being',
      des: '1K+ events',
    },
    {
      source: require('../../assets/SelectHashtag/9.png'),
      title: '#Indusry_Innovation_and_Infrastructure',
      des: '1K+ events',
    },
    
    {
      source: require('../../assets/SelectHashtag/10.png'),
      title: '#Reduced_Inequalities',
      des: '1K+ events',
    },
    {
      source: require('../../assets/SelectHashtag/11.png'),
      title: '#Good Health and Well-being',
      des: '1K+ events',
    },
    {
      source: require('../../assets/SelectHashtag/12.png'),
      title: '#Good Health and Well-being',
      des: '1K+ events',
    },
    {
      source: require('../../assets/SelectHashtag/13.png'),
      title: '#Good Health and Well-being',
      des: '1K+ events',
    },
    {
      source: require('../../assets/SelectHashtag/14.png'),
      title: '#Good Health and Well-being',
      des: '3K+ events',
    },
    {
      source: require('../../assets/SelectHashtag/15.png'),
      title: '#Good Health and Well-being',
      des: '1K+ events',
    },
    {
      source: require('../../assets/SelectHashtag/16.png'),
      title: '#Good Health and Well-being',
      des: '1K+ events',
    },
    {
      source: require('../../assets/SelectHashtag/17.png'),
      title: '#Good Health and Well-being',
      des: '4K+ events',
    },
  ];*/

const SelectHashtag = memo(() => {
  const { navigate } = useNavigation();
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  //get array from reducer
  const { interest_array } = useSelector((state) => state.interests);

  const onMaintab = useCallback(() => {
    // Display an interstitial

    navigate(ROUTES.MainBottomTab);
  }, []);
  useEffect(() => {
    _getAllHashTags();
  }, []);
  const numColumn = 2;
  const renderItem = useCallback(({ item, index }) => {
    // let n = Object.assign([], item);
    // console.log("n", n);

    const { source, title, des, _id, active } = item;
    return (
      <HashtagItem
        source={source}
        title={title}
        des={des}
        id={_id}
        active={active}
      />
    );
  }, []);
  const [dataB, setDataB] = useState();

  async function _getAllHashTags() {
    try {
      const response = await dontBeQuietApi.get("/interests").then((res) => {
        var data = res.data.data.data[0].interests;
        // console.log("data", data);
        setDataB(data);
        setLoading(false);
        // add active key in array for logic purposes
        let a = Object.assign([], data);
        a.map((o) => (o.active = false));
        dispatch(interestRequest(a));
        // console.log("dataB", dataB);
      });
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <View style={styles.container}>
      {loading === true ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size="large" color="#6BB981" />
        </View>
      ) : interest_array !== [] && interest_array !== undefined ? (
        <>
          {console.log("here in if")}
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ marginHorizontal: 10 }}
          >
            <FlatList
              data={interest_array}
              renderItem={renderItem}
              keyExtractor={keyExtractor}
              showsVerticalScrollIndicator={false}
              numColumns={numColumn}
              style={styles.list}
            />
          </ScrollView>
        </>
      ) : (
        <>
          {console.log("here in else")}
          <Text>No items</Text>
        </>
      )}
    </View>
  );
});

export default SelectHashtag;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainerStyle: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  list: {
    paddingTop: 24,
    marginBottom: 60,
  },

  btnNext: {
    position: "absolute",
    bottom: getBottomSpace() + 8,
    width: width_screen - 48,
    height: 50,
    alignSelf: "center",
    borderRadius: 100,
  },
});
