import React, {memo} from 'react';
import {createStackNavigator, HeaderBackButton} from '@react-navigation/stack';
import ROUTES from 'ultis/routes';
import TabSearchEvents from '../screens/TabSearchEvents';
import {headerBackground} from 'nav/Main';
import { Button } from 'react-native';
import Home from '../screens/AllEventAroundYou'
import {useNavigation} from '@react-navigation/native';
const Stack = createStackNavigator();

const StackSearchEvents = memo(() => {
  const {navigate} = useNavigation();
  return(
  <Stack.Navigator
  
    screenOptions={{
      headerBackground: headerBackground,
      headerTintColor: 'white',
    }}>
    <Stack.Screen
      name={ROUTES.StackSearchEvents}
      component={TabSearchEvents}
      options={{
        title: 'Search Events',
      headerBackTitleVisible:false,
      /*headerLeft: () => (
        <Button
          onPress={() => navigate(ROUTES.EventAroundYou)}
          title="Info"
          color="red"
        />
      ), */
      headerLeft: ()=> null,
    }}
      
    />
  </Stack.Navigator>)
});

export default StackSearchEvents;
function alert(arg0: string): void {
  throw new Error('Function not implemented.');
}

