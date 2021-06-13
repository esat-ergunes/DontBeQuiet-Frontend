import React, { memo, useCallback, useRef, useState } from "react";
import * as SecureStore from "expo-secure-store";
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
  Modal,
  ActivityIndicator,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import { height_screen, width_screen } from "ultis/dimensions";
import { useNavigation } from "@react-navigation/native";
import ROUTES from "ultis/routes";
import { useDispatch, useSelector } from "react-redux";
import { tokenAction } from "redux/actions";

const loginScreen = memo(() => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState();
  const [isErrorMessage, setIsErrorMessage] = useState(false);
  const { navigate } = useNavigation();

  const Signup = useCallback(() => {
    navigate(ROUTES.Register);
  }, []);

  const Login = async () => {
    setLoading(true);

    console.log(email + " " + password);
    if (email != "" && password != "") {
      await fetch("https://dont-be-quiet.herokuapp.com/login", {
        method: "POST",
        headers: {
          Accept: "applicattion/json",
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      })
        .then((res) => res.json())
        .then(async (resData) => {
          //console.log(resData.status)
          console.log(resData.status);
          if (resData.status != "user failed") {
            setIsErrorMessage(false);
            setLoading(false);
            console.log(resData.data);
            dispatch(tokenAction(resData.data.token));
            await AsyncStorage.setItem("token", resData.data.token);
            navigate(ROUTES.MainBottomTab);
          } else {
            setIsErrorMessage(true);
            console.log(resData.message);
            setErrorMessage(resData.message);
            setLoading(false);
          }
        });
    }
  };

  return (
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
        <Text style={styles.title}>Login</Text>

        <View style={styles.title2}>
          {isErrorMessage ? (
            <TextInput
              autoFocus={true}
              style={styles.input2}
              placeholder="Email"
              value={email}
              onChangeText={(anything) => setEmail(anything)}
            />
          ) : (
            <TextInput
              autoFocus={true}
              style={styles.input}
              placeholder="Username"
              value={email}
              onChangeText={(anything) => setEmail(anything)}
            />
          )}
          {isErrorMessage ? (
            <TextInput
              style={styles.input2}
              placeholder="Password"
              value={password}
              onChangeText={(pass) => setPassword(pass)}
              secureTextEntry={true}
            />
          ) : (
            <TextInput
              style={styles.input}
              placeholder="Password"
              value={password}
              onChangeText={(pass) => setPassword(pass)}
              secureTextEntry={true}
            />
          )}

          <View>
            <Text style={{ color: "red" }}>{errorMessage}</Text>
          </View>
        </View>

        <View style={styles.title3}>
          {loading ? (
            <TouchableOpacity
              onPress={() => {}}
              style={{
                backgroundColor: "black",
                borderRadius: 100,
                width: width_screen - 100,
                height: 50,
                justifyContent: "center",
              }}
            >
              <ActivityIndicator size="small" color="#6BB981" />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={Login}
              style={{
                backgroundColor: "black",
                borderRadius: 100,
                width: width_screen - 100,
                height: 50,
                justifyContent: "center",
              }}
            >
              <Text
                style={{ color: "#6BB981", fontSize: 22, textAlign: "center" }}
              >
                Login
              </Text>
            </TouchableOpacity>
          )}

          <TouchableOpacity onPress={Signup} style={{ marginVertical: 20 }}>
            <Text>Don't haven an account yet? Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "column",
  },
  images: {
    flex: 1,
    marginHorizontal: 80,
    height: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  background: {
    borderTopLeftRadius: 70,
    flex: 3,
    backgroundColor: "white",
    alignItems: "center",
  },
  tinyLogo: {
    width: 100,
    height: 100,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    flex: 1,
    marginVertical: 10,
  },
  title2: {
    justifyContent: "space-evenly",

    flex: 3,
  },
  input: {
    height: 50,
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    width: width_screen - 100,
    marginVertical: 20,
  },
  input2: {
    height: 50,
    borderBottomColor: "red",
    borderBottomWidth: 1,
    width: width_screen - 100,
    marginVertical: 20,
  },
  title3: {
    justifyContent: "flex-end",
    flex: 4,
    alignItems: "center",
  },
});
export default loginScreen;
