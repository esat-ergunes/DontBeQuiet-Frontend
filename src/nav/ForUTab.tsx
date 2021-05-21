import React, {memo} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ROUTES from '../ultis/routes';
import EventAroundYou from '../screens/EventAroundYou';
import Trending from '../screens/Trending';
import FONTS from '../ultis/fonts';

const Tab = createMaterialTopTabNavigator();
const ForUTab = memo(() => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'black',
        inactiveTintColor: '#7F8FA6',
        indicatorStyle: {
          backgroundColor: '#61c13c',
        },
        labelStyle: {
          fontFamily: FONTS.Regular,
        },
      }}>
      <Tab.Screen
        name={ROUTES.EventAroundYou}
        component={EventAroundYou}
        options={{
          tabBarLabel: 'For You',
        }}
      />
      <Tab.Screen
        name={ROUTES.Trending}
        component={Trending}
        options={{
          tabBarLabel: 'TRENDING',
        }}
      />
    </Tab.Navigator>
  );
});
export default ForUTab;
