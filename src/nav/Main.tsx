import React, {memo} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ROUTES from 'ultis/routes';
import {StatusBar, Text, TouchableOpacity, View} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import StartScreen from "../screens/StartScreen/startScreen";
import Register from '../screens/Register/registerScreen';
import Login from '../screens/Login/loginScreen';



const Stack = createStackNavigator();
export const headerBackground = () => (
    /*<LinearGradient
        colors={['#ED3269', '#F05F3E']}
        start={{x: 0, y: 1}}
        end={{x: 1, y: 1}}
        style={{flex: 1}}
    />*/
   <LinearGradient
        colors={['white', 'white']}
        start={{x: 0, y: 1}}
        end={{x: 1, y: 1}}
        style={{flex: 1}}
    />
    );


/*export const headerRight = () => (
    <TouchableOpacity>
        <SvgChatOption style={{right: 24}}/>
    </TouchableOpacity>
);*/
const Main = memo(() => {
    return (
        <NavigationContainer>
            <StatusBar
                barStyle={'light-content'}
                translucent={true}
                backgroundColor={'transparent'}
            />

        <Stack.Navigator
                initialRouteName={ROUTES.StartScreen}
                screenOptions={{
                    headerTintColor: 'white',
                    headerShown: false,
                }}>
                <Stack.Screen
                    name={ROUTES.StartScreen}
                    component={StartScreen}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name={ROUTES.Register}
                    component={Register}
                    options={{headerBackTitleVisible: false,title:'',headerTransparent:true}}
                />
                <Stack.Screen
                    name={ROUTES.Login}
                    component={Login}
                    options={{headerBackTitleVisible: false, title: ' ',headerTransparent:true}}
                />
                
            
        </Stack.Navigator>
        </NavigationContainer>
    );
});

export default Main;
