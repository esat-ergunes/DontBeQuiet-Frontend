import React, {memo} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ROUTES from '../ultis/routes';
import ProfileActivity from '../screens/ProfileActivity';
import ProfileTickets from '../screens/ProfileTickets';
import ProfileSaved from '../screens/ProfileSaved';
import About from '../screens/About';

const Tab = createMaterialTopTabNavigator();

const TabProfile = memo(() => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'black',
        inactiveTintColor: '#7F8FA6',
        indicatorStyle: {
          backgroundColor: '#61c13c',
        },
      }}>
      <Tab.Screen name={ROUTES.About} component={About} />

    </Tab.Navigator>
  );
});

export default TabProfile;
