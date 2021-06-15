import React, { memo, useCallback, useEffect, useState } from "react";
import { width_screen } from "ultis/dimensions";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import FONTS from "ultis/fonts";
import { LinearGradient } from "expo-linear-gradient";
import SvgCheck from "svgs/SvgCheck";
//redux imports
import { useDispatch, useSelector } from "react-redux";
import { interestRequest, unInterestRequest } from "redux/actions";

interface Props {
  source: any;
  title: string;
  des: string;
  id: string;
  active: boolean;
}

const HashtagItem = memo((props: Props) => {
  const { source, title, des, id, active } = props;
  //get array from reducer
  const { interest_array, selected_array } = useSelector(
    (state) => state.interests
  );
  const dispatch = useDispatch();

  const onChosse = () => {
    let a = interest_array;
    const itemFindIndex = a.findIndex((x) => x._id === id);
    if (a[itemFindIndex].active === false) {
      dispatch(interestRequest(props));
    } else {
      dispatch(unInterestRequest(props));
    }
  };
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.75}
      onPress={onChosse}
    >
      <Image source={{ uri: source }} style={styles.img} />
      <Text style={[styles.title, { color: active ? "#353B48" : "#353B48" }]}>
        {title}
      </Text>
      
      {active && (
        <LinearGradient
          style={styles.block}
          colors={["#64c141", "#64c141"]}
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 1 }}
        />
      )}
      {active && (
        <View style={styles.containerCheck}>
          <SvgCheck />
        </View>
      )}
    </TouchableOpacity>
  );
});

export default HashtagItem;

const styles = StyleSheet.create({
  container: {
    width: (width_screen - 72) / 2,
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 32,
  },
  img: {
    width: (width_screen - 150) / 2,
    height: (width_screen - 150) * 0.67,
    borderRadius: 10,
  },
  title: {
    color: "#353B48",
    fontSize: 16,
    fontFamily: FONTS.Medium,
    marginTop: 16,
  },
  des: {
    color: "#7F8FA6",
    fontSize: 12,
    fontFamily: FONTS.Regular,
  },
  block: {
    width: (width_screen - 150) / 2,
    height: (width_screen - 150) * 0.67,
    borderRadius: 10,
    position: "absolute",
    opacity: 0.6,
  },
  containerCheck: {
    width: (width_screen - 150) / 2,
    height: (width_screen - 150) * 0.67,
    borderRadius: 10,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
});
