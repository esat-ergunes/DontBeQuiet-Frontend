import React, {memo} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ROUTES from 'ultis/routes';
import ForYou from '../screens/ForYou';
import Explorer from '../screens/Explorer';

const Tab = createMaterialTopTabNavigator();

const PeopleTab = memo(() => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'black',
        inactiveTintColor: '#7F8FA6',
        indicatorStyle: {
          backgroundColor: '#61c13c',
        },
      }}>
      <Tab.Screen name={ROUTES.ForYou} component={ForYou} />
      <Tab.Screen name={ROUTES.Explorer} component={Explorer} />
    </Tab.Navigator>
  );
});

export default PeopleTab;
