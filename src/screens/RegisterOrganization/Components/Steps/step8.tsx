import React, { Component } from "react";
import {
  Image,
  View,
  TouchableOpacity,
  TextInput,
  Text,
  StyleSheet,
  ImageBackground,
} from "react-native";
import CustomDatePicker from "../datePicker";
import { Ionicons } from "@expo/vector-icons";

export class step8 extends Component {
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
    const { next, saveState } = this.props;
    
    next();
  };

  render() {
    const { currentStep, totalSteps } = this.state;
    return (
      <>
        <ImageBackground
          source={require("../../assets/FinishScreen.png")}
          style={styles.image}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <TouchableOpacity onPress={this.props.back} style={{ zIndex: 300 }}>
              <Ionicons
                name="ios-chevron-back-outline"
                size={34}
                color="black"
              />
            </TouchableOpacity>
          </View>

          <View style={styles.container}>
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <Text style={{ fontSize: 35 }}>congratulations</Text>
            </View>
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <Text style={{ fontSize: 20, textAlign: "center" }}>
                Your account has been created successfully
              </Text>
            </View>

            <View style={[styles.btnContainer, styles.marginAround]}>
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
                  style={{
                    color: "#70B62E",
                    textAlign: "center",
                    fontSize: 19,
                  }}
                >
                  Let's start
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
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
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  marginAround: {
    marginVertical: 34,
  },
});
export default step8;
