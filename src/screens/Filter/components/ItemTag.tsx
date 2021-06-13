import React, { memo, useCallback, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import FONTS from "ultis/fonts";
import { useDispatch, useSelector } from "react-redux";
import { interestRequest, unInterestRequest } from "redux/actions";

interface ItemTag {
  active: boolean;
  tagName: string;
  id: string;
}
const ItemTag = memo((props: ItemTag) => {
  const dispatch = useDispatch();
  const { interest_array, selected_array } = useSelector(
    (state) => state.interests
  );
  const [isActive, setActive] = useState(props.active);
  let stylesTag;
  let colorText;
  // let n = [];
  // if (isActive) {
  //   stylesTag = [styles.tagItemContainer, styles.colorActive];
  //   colorText = "white";
  // } else {
  //   stylesTag = [styles.tagItemContainer, styles.colorInactive];
  //   colorText = "#7F8FA6";
  //   // dispatch(unInterestRequest(props));
  // }
  const onChoice = () => {
    let a = interest_array;
    const itemFindIndex = a.findIndex((x) => x._id === props.id);
    if (a[itemFindIndex].active === false) {
      dispatch(interestRequest(props));
      stylesTag = [styles.tagItemContainer, styles.colorActive];
      colorText = "white";
    } else {
      dispatch(unInterestRequest(props));
      stylesTag = [styles.tagItemContainer, styles.colorInactive];
      colorText = "#7F8FA6";
    }
  };

  return (
    <TouchableOpacity
      style={
        props.active
          ? [styles.tagItemContainer, styles.colorActive]
          : [styles.tagItemContainer, styles.colorInactive]
      }
      onPress={onChoice}
    >
      <Text
        style={[
          styles.textTagName,
          { color: props.active ? "white" : "#7F8FA6" },
        ]}
      >
        {props.tagName}
      </Text>
    </TouchableOpacity>
  );
});

export default ItemTag;

const styles = StyleSheet.create({
  tagItemContainer: {
    height: 32,
    borderRadius: 100,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 8,
  },
  colorActive: {
    backgroundColor: "#1D1D1B",
  },
  colorInactive: {
    backgroundColor: "#F7F8FA",
  },
  textTagName: {
    fontFamily: FONTS.Regular,
    fontSize: 14,
  },
});
