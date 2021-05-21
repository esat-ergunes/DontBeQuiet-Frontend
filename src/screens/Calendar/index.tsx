import React, {memo, useCallback} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ROUTES from 'ultis/routes';
import {headerBackground} from 'nav/Main';
import TabProfile from '../../nav/TabProfile';
import TabCalendar from '../../nav/TabCalendar'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import SvgNotificationIcon from '../../svgs/Proflie/SvgNotificationIcon';
import SvgSettingIcon from '../../svgs/Proflie/SvgSettingsIcon';
import {useNavigation} from '@react-navigation/native';
import FONTS from 'ultis/fonts';

const Stack = createStackNavigator();
const index = memo(() => {
  const navigation = useNavigation();
  /*const onNotification = useCallback(() => {
    navigation.navigate(ROUTES.Notification);
  }, [navigation]);
  const onSettings = useCallback(() => {
    navigation.navigate(ROUTES.Settings);
  }, [navigation]);*/
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackground: headerBackground,
        headerTintColor: '#FFF',
      }}>
      <Stack.Screen
        name={ROUTES.TabProfile}
        component={TabCalendar}
        options={{
          title: 'Calendar',
          headerLeft: () => {
            return null;
          },
        }}
      />
    </Stack.Navigator>
  );
});

export default index;

const styles = StyleSheet.create({
  headeRight: {
    flexDirection: 'row',
    right: 12,
  },
  btnNotification: {
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnSetting: {
    flex: 1,
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notification: {
    position: 'absolute',
    right: 2,
    top: 6,
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtNotification: {
    fontFamily: FONTS.Medium,
    fontSize: 12,
    color: '#ED3269',
  },
});
