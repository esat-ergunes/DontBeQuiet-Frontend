import React, { Component } from "react";
import {
  Image,
  View,
  TouchableOpacity,
  TextInput,
  Text,
  StyleSheet,
  Platform,
  Alert,
} from "react-native";
import CustomDatePicker from "../datePicker";
import { Ionicons } from "@expo/vector-icons";
import { Avatar } from "react-native-elements";
import ReactNativeVectorIcons from "react-native-vector-icons";
import * as ImagePicker from "expo-image-picker";

export class step2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalSteps: "",
      currentStep: "",
      image: "",
      imageResponse: "",
    };
  }
  static getDerivedStateFromProps = (props) => {
    const { getTotalSteps, getCurrentStep, tests } = props;
    return {
      totalSteps: getTotalSteps(),
      currentStep: getCurrentStep(),
    };
  };
  componentDidMount() {
    async () => {
      if (Platform.OS !== "web") {
        const {
          status,
        } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          Alert.alert(
            "Sorry, we need camera roll permissions to make this work!"
          );
        }
      }
    };
  }
  pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ image: result.uri });
      this.setState({ imageResponse: result });
    }
  };

  nextStep = () => {
    const { next, saveState } = this.props;
    saveState({ logo: this.state.imageResponse });

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
        <View style={{ marginVertical: 30 }}>
          <Text
            style={{ textAlign: "center", fontSize: 24, marginHorizontal: 5 }}
          >{`Organization logo `}</Text>
        </View>

        {/* {this.state.image && ( */}
        <Avatar
          size={140}
          rounded
          onPress={() => this.pickImage()}
          avatarStyle={{}}
          containerStyle={{
            justifyContent: "center",
            alignSelf: "center",
            backgroundColor: "white",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
          }}
          source={{ uri: this.state.image }}
        />
        {/* // )} */}
        {/* {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />} */}

        <View style={[styles.container]}>
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
export default step2;
