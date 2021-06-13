import createDataContext from "./createDataContext";
import dontBeQuietApi from "../api/dontBequiet";
import AsyncStorage from "@react-native-community/async-storage";
import { useNavigation } from "@react-navigation/native";
import ROUTES from "ultis/routes";
import axios from "axios";

const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload };
    case "signup":
      return { errorMessage: "", token: action.payload };
    default:
      return state;
  }
};

const signup = (dispatch) => async ({
  email,
  password,
  interests,
  type,
  logo,
  username,
}) => {
  // make api request to sign up  with email password

  // let interest1 = JSON.stringify(interests);
  console.log("interest1", interests);

  let data = {
    email: email,
    password: password,
    username: username,
    interests: interests,
  };
  // { email, password, username, interest }
  console.log("data ===>>>", data);

  if (type === "Activist") {
    try {
      const response = await axios
        .post("https://dont-be-quiet.herokuapp.com/activist/signup", data)
        .then(async function (response) {
          // handle success
          console.log("response.data.data", response.data);
          await AsyncStorage.setItem("token", response.data.data.token);
          dispatch({ type: "signup", payload: response.data.data.token });
          //console.log(response.data.data.token);
          //await AsyncStorage.setItem('token','eeeeeeeeeeeeeeee')
          //dispatch({type:'signup',payload:response.data.token})
          //console.log(response.data.token);
        })
        .catch(function (error) {
          // handle error
          console.log("error", error);
        });
    } catch (err) {
      dispatch({
        type: "add_error",
        payload: "Something went wrong with sign up",
      });

      //console.log(err.message)
    }
  } else {
    console.log("here in else");

    let data = new FormData();
    data.append("email", email);
    data.append("username", username);
    data.append("password", password);
    {
      for (let i = 0; i < interests.length; i++)
        data.append("interests[]", interests[i]);
    }
    data.append("logo", { uri: logo.uri, name: "Test", type: logo.type });
    console.log("data", data);

    try {
      const response = await dontBeQuietApi
        .post("/organization/signup", data, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then(async function (response) {
          // handle success
          //console.log(response.data.data.token);
          console.log("response.data.data", response.data.data);
          await AsyncStorage.setItem("token", response.data.data.token);
          dispatch({ type: "signup", payload: response.data.data.token });
          //console.log(response.data.data.token);
          //await AsyncStorage.setItem('token','eeeeeeeeeeeeeeee')
          //dispatch({type:'signup',payload:response.data.token})
          //console.log(response.data.token);
        })
        .catch(function (error) {
          // handle error
          console.log("error", error);
        });
    } catch (err) {
      dispatch({
        type: "add_error",
        payload: "Something went wrong with sign up",
      });

      //console.log(err.message)
    }
  }
  // if user sign up, modify our state, and say that are authenticated

  //if fail show error
};

const signin = (dispatch) => {
  return ({ email, password }) => {
    // make api request to sign up  with email password
    // if user sign up, modify our state, and say that are authenticated
    //if fail show error
  };
};

const signout = (dispatch) => {
  return () => {
    // sign out
  };
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signout, signup },
  { token: null, errorMessage: "" }
);
