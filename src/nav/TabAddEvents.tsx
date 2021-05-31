import React, {memo} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ROUTES from 'ultis/routes';
import Add_Event from '../screens/AddEvent/Components/Add_Event';
import Add_Post from '../screens/AddEvent/Components/Add_Post';

const Tab = createMaterialTopTabNavigator();

const TabAddEvents = memo(() => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'black',
        inactiveTintColor: '#7F8FA6',
        indicatorStyle: {
          backgroundColor: '#61c13c',
        },
      }}>
      <Tab.Screen name={ROUTES.Add_Event} component={Add_Event} />
    </Tab.Navigator>
  );
});

export default TabAddEvents;
