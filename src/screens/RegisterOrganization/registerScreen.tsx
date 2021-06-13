import React, { memo, useCallback, useRef, useContext } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  Image,
  TextInput,
  Button,
  KeyboardAvoidingView,
} from "react-native";
import { height_screen, width_screen } from "ultis/dimensions";
import AnimatedMultistep from "react-native-animated-multistep";
import { useLinkProps, useNavigation } from "@react-navigation/native";
import ROUTES from "ultis/routes";
import { Context as AuthContext } from "../../context/AuthContext";
/* Define the steps  */

import Step1 from "./Components/Steps/step1";
import Step2 from "./Components/Steps/step2";
import Step3 from "./Components/Steps/step3";
import Step4 from "./Components/Steps/step4";
import Step5 from "./Components/Steps/step5";
import Step6 from "./Components/Steps/step6";
import Step7 from "./Components/Steps/step7";
import Step8 from "./Components/Steps/step8";
import axios from "axios";

const allSteps = [
  { name: "step 1", component: Step1 },
  { name: "step 2", component: Step2 },
  { name: "step 3", component: Step3 },
  { name: "step 4", component: Step4 },
  { name: "step 5", component: Step5 },
  { name: "step 6", component: Step6 },
  { name: "step 7", component: Step7 },
  { name: "step 8", component: Step8 },
];

const registerScreen = memo(() => {
  const { navigate } = useNavigation();
  const { state, signup } = useContext(AuthContext);
  const onNext = () => {
    console.log("Next");
  };

  /* define the method to be called when you go on back step */

  const onBack = () => {
    console.log("Back");
  };

  /* define the method to be called when the wizard is finished */

  const finish = async (finalState) => {
    try {
      console.log(finalState);
      const response = await axios
        .post("https://dont-be-quiet.herokuapp.com/organization/signup", {
          email: finalState.email,
          password: finalState.password,
          username: finalState.name,
          logo: "uploads/logo/2021-05-29T11-30-37.749Zlogobreed.png",
          interests: JSON.stringify(finalState.interests),
        })
        .then(async function (response) {
          console.log(response.data);
          navigate(ROUTES.Login);
        });
    } catch (error) {
      console.log(error.message);
    }
  };

  const Login = () => {
    console.log("go to register page");
  };
  const Signup = () => {
    console.log("go to register page");
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: "#1D1D1B",
          justifyContent: "flex-end",
        }}
      >
        <View style={styles.images}>
          <Image
            style={styles.tinyLogo}
            source={require("../../assets/StartScreen/Logo.png")}
          />
        </View>

        <View style={styles.background}>
          <Text style={styles.title}></Text>
          <View style={{ flex: 1, marginHorizontal: 40 }}>
            <AnimatedMultistep
              steps={allSteps}
              onFinish={
                (finalState) => {
                  console.log("finalState", finalState);
                  signup({
                    email: finalState.email,
                    password: finalState.password,
                    interests: finalState.interests,
                    type: "Organization",
                    logo: finalState.logo,
                    username: finalState.username,
                  });
                }
                // finish
              }
              onBack={onBack}
              onNext={onNext}
              comeInOnNext="bounceInRight"
              OutOnNext="bounceOutLeft"
              comeInOnBack="bounceInLeft"
              OutOnBack="bounceOutRight"
            />
            {state.errorMessage ? (
              <Text
                style={{
                  color: "red",
                  textAlign: "center",
                  marginTop: -20,
                  marginBottom: 10,
                }}
              >
                {state.errorMessage}
              </Text>
            ) : null}
            {!state.token ? null : navigate(ROUTES.Login)}
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "column",
  },
  images: {},
  background: {
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: 70,
  },
  tinyLogo: {
    width: 0,
    height: 0,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
  },
});
export default registerScreen;
