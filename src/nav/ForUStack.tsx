import React, {memo} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ROUTES from 'ultis/routes';
import ForUTab from './ForUTab';
import {headerBackground} from 'nav/Main';
const Stack = createStackNavigator();
const ForUStack = memo(() => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackground: headerBackground,
        headerTintColor: 'white',
      }}>
      <Stack.Screen
        name={ROUTES.ForUStack}
        component={ForUTab}
        options={{
          title: "   NEWSFEED   ",
          headerLeft: ()=> null,
        }}
      />
    </Stack.Navigator>
  );
});

export default ForUStack;
