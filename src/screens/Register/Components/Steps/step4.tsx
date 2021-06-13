import React, { Component } from "react";
import {
  Image,
  View,
  TouchableOpacity,
  TextInput,
  Text,
  StyleSheet,
} from "react-native";
import CustomDatePicker from "../datePicker";
import { Ionicons } from "@expo/vector-icons";
import SelectHashTag from "../../../SelectHashtag/index";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "react-redux";
export class step4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalSteps: "",
      currentStep: "",
    };
  }
  static getDerivedStateFromProps = (props) => {
    const { getTotalSteps, getCurrentStep, tests } = props;
    return {
      totalSteps: getTotalSteps(),
      currentStep: getCurrentStep(),
    };
  };

  nextStep = () => {
    const { next, saveState, selectedArray } = this.props;
    saveState({ interests: selectedArray });

    next();
  };

  render() {
    const { currentStep, totalSteps } = this.state;
    return (
      <>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <TouchableOpacity onPress={this.props.back} style={{ zIndex: 300 }}>
            <Ionicons name="ios-chevron-back-outline" size={34} color="black" />
          </TouchableOpacity>
        </View>
        <View style={{ marginVertical: 10 }}>
          <Text
            style={{ textAlign: "center", fontSize: 24, marginHorizontal: 5 }}
          >{`Choose your interests`}</Text>
        </View>

        <SelectHashTag />

        <View style={{ marginVertical: 10 }}>
          <View style={styles.btnContainer}>
            <TouchableOpacity
              onPress={this.nextStep}
              style={{
                backgroundColor: "#1D1D1B",
                paddingHorizontal: 100,
                paddingVertical: 10,
                borderRadius: 100,
              }}
            >
              <Text
                style={{ color: "#70B62E", textAlign: "center", fontSize: 19 }}
              >
                Continue
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "column",
  },
  input: {
    height: 30,
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    marginVertical: 10,
  },
  btnContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
const mapStateToProps = (state) => {
  console.log("state", state);

  return {
    selectedArray: state.interests.selected_array,
  };
};
export default connect(mapStateToProps)(step4);
