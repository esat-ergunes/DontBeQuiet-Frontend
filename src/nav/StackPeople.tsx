import React, {memo, useCallback} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ROUTES from 'ultis/routes';
import {headerBackground} from 'nav/Main';
import TabPeople from '../nav/TabPeople';
import {StyleSheet, TouchableOpacity} from 'react-native';
import SvgHeaderSearch from 'svgs/SvgHeaderSearch';
import SvgBackButton from 'svgs/svgBackButton';
import {useNavigation} from '@react-navigation/native';
import { Icon } from 'expo';

const Stack = createStackNavigator();
const StackPeople = memo(() => {
  const navigation = useNavigation();
  const onSearchPeople = useCallback(() => {
    navigation.navigate(ROUTES.SearchPeople);
  }, [navigation]);

  const goBack = useCallback(() => {
    navigation.navigate(ROUTES.EventAroundYou);
  }, [navigation]);
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackground: headerBackground,
        headerTintColor: '#FFF',
      }}>
      <Stack.Screen
        name={ROUTES.ForUStack}
        component={TabPeople}
        options={{
          title: 'Organizations',
          headerRight: () => (
            <TouchableOpacity style={styles.search} onPress={onSearchPeople}>
              <SvgHeaderSearch />
            </TouchableOpacity>
          ),
          headerLeft: () => {
            return null;
          }
        }}
      />
    </Stack.Navigator>
  );
});

export default StackPeople;

const styles = StyleSheet.create({
  search: {
    width: 50,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
