import React, {memo} from 'react';
import {StyleSheet, View,Text, SafeAreaView} from 'react-native';
import HeaderProfile from 'screens/About/components/HeaderProfile';
import {useNavigation} from '@react-navigation/native';
import ROUTES from 'ultis/routes';
import {createStackNavigator} from '@react-navigation/stack';
import TabEvents from '../AddEvent/Components/Add_Event';
import TabPost from '../AddEvent/Components/Add_Post'

import {headerBackground} from 'nav/Main';
import TabAddEvents from 'nav/TabAddEvents';

const item = {
  
};

const Stack = createStackNavigator();

const addEvent = memo(() => {
  const navigation = useNavigation();
  return (
   
    <Stack.Navigator
      screenOptions={{
        headerBackground: headerBackground,
        headerTintColor: '#FFF',
      }}>
      <Stack.Screen
        name={ROUTES.TabProfile}
        component={TabAddEvents}
        options={{
          title: 'Add new',
          headerLeft: () => {
            return null;
          },
        }}
      />
    </Stack.Navigator>
   
   
  );
});

export default addEvent;

const styles = StyleSheet.create({
  container: {
 
  },
});
