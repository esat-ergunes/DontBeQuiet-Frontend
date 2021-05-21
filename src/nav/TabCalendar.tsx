import React, {memo} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ROUTES from '../ultis/routes';
import ProfileActivity from '../screens/ProfileActivity';
import Upcoming from '../screens/Calendar/components/upcoming';

import ProfileSaved from '../screens/ProfileSaved';


const Tab = createMaterialTopTabNavigator();

const TabCalendar = memo(() => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'black',
        inactiveTintColor: '#7F8FA6',
        indicatorStyle: {
          backgroundColor: '#61c13c',
        },
      }}>
     
      <Tab.Screen name={ROUTES.ProfileActivity} component={Upcoming} />
      
      <Tab.Screen name={ROUTES.ProfileSaved} component={ProfileSaved} />
    </Tab.Navigator>
  );
});

export default TabCalendar;
