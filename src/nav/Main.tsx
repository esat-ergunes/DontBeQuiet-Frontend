import React, { memo } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ROUTES from "ultis/routes";
import { StatusBar, Text, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StartScreen from "../screens/StartScreen/startScreen";
import Register from "../screens/Register/registerScreen";
import Login from "../screens/Login/loginScreen";
import Filter from "../screens/Filter";
import PeopleProfile from "screens/PeopleProfile";
import MainBottomTab from "../nav/MainBottomTab";
import AllEventAroundYou from "../screens/AllEventAroundYou";
import EventDetailMap from "screens/EventDetailMap";
import Routes from "screens/Routes";
import EventDetail from "screens/EventDetail";
import Attending from "screens/Attending";
import RegisterOrganization from "screens/RegisterOrganization/registerScreen";
import ForYou from "screens/ForYou";
import { Icon } from "expo";
import { navigationRef } from "./RootNavigation";

const Stack = createStackNavigator();
export const headerBackground = () => (
  /*<LinearGradient
        colors={['#ED3269', '#F05F3E']}
        start={{x: 0, y: 1}}
        end={{x: 1, y: 1}}
        style={{flex: 1}}
    />*/
  <LinearGradient
    colors={["#1d1d1b", "#1d1d1b"]}
    start={{ x: 0, y: 1 }}
    end={{ x: 1, y: 1 }}
    style={{ flex: 1 }}
  />
);

/*export const headerRight = () => (
    <TouchableOpacity>
        <SvgChatOption style={{right: 24}}/>
    </TouchableOpacity>
);*/
const Main = memo(() => {
  return (
    <NavigationContainer ref={navigationRef}>
      <StatusBar
        barStyle={"light-content"}
        translucent={true}
        backgroundColor={"transparent"}
      />

      <Stack.Navigator
        initialRouteName={ROUTES.StartScreen}
        screenOptions={{
          headerTintColor: "black",
          headerShown: true,
          //headerBackground:headerBackground
        }}
      >
        <Stack.Screen
          name={ROUTES.StartScreen}
          component={StartScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={ROUTES.Register}
          component={Register}
          options={{
            headerBackTitleVisible: false,
            title: "",
            headerTransparent: true,
            headerLeft: () => null,
          }}
        />
        <Stack.Screen
          name={ROUTES.RegisterOrganization}
          component={RegisterOrganization}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={ROUTES.Login}
          component={Login}
          options={{
            headerBackTitleVisible: false,
            title: " ",
            headerTransparent: true,
            headerTintColor: "white",
          }}
        />
        <Stack.Screen
          name={ROUTES.MainBottomTab}
          component={MainBottomTab}
          options={{
            gestureEnabled: false,
            headerShown: false,
          }}
        />

        <Stack.Screen
          name={ROUTES.Filter}
          component={Filter}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={ROUTES.AllEventAroundYou}
          component={AllEventAroundYou}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={ROUTES.EventDetail}
          component={EventDetail}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={ROUTES.ListAttending}
          component={Attending}
          options={{ headerBackTitleVisible: false, title: "Attending" }}
        />
        <Stack.Screen
          name={ROUTES.EventDetailMap}
          component={EventDetailMap}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={ROUTES.PeopleProfile}
          component={PeopleProfile}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name={ROUTES.Routes}
          component={Routes}
          options={{ headerBackTitleVisible: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
});

export default Main;
