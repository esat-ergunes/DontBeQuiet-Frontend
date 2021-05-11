import React from 'react';
import 'react-native-gesture-handler';

import AppLoading from 'expo-app-loading';
import {useFonts} from "expo-font";
import StartScreen from "./src/screens/StartScreen/startScreen"
import LoginScreen from "./src/screens/Login/loginScreen"
import RegisterScreen from "./src/screens/Register/registerScreen"
import RegisterOrganizationScreen from "./src/screens/RegisterOrganization/registerScreen"
import { SafeAreaView, Text,StyleSheet, View } from 'react-native';

const App = () => {
    let [fontsLoaded] = useFonts({
        'DINCondensed-Bold': require('./assets/fonts/DINCondensed-Bold.ttf'),
        'Montserrat-Black': require('./assets/fonts/Montserrat-Black.ttf'),
        'Montserrat-BlackItalic': require('./assets/fonts/Montserrat-BlackItalic.ttf'),
        'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.ttf'),
        'Montserrat-BoldItalic': require('./assets/fonts/Montserrat-BoldItalic.ttf'),
        'Montserrat-ExtraBold': require('./assets/fonts/Montserrat-ExtraBold.ttf'),
        'Montserrat-ExtraBoldItalic': require('./assets/fonts/Montserrat-ExtraBoldItalic.ttf'),
        'Montserrat-ExtraLight': require('./assets/fonts/Montserrat-ExtraLight.ttf'),
        'Montserrat-ExtraLightItalic': require('./assets/fonts/Montserrat-ExtraLightItalic.ttf'),
        'Montserrat-Italic': require('./assets/fonts/Montserrat-Italic.ttf'),
        'Montserrat-Light': require('./assets/fonts/Montserrat-Light.ttf'),
        'Montserrat-LightItalic': require('./assets/fonts/Montserrat-LightItalic.ttf'),
        'Montserrat-Medium': require('./assets/fonts/Montserrat-Medium.ttf'),
        'Montserrat-MediumItalic': require('./assets/fonts/Montserrat-MediumItalic.ttf'),
        'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf'),
        'Montserrat-SemiBold': require('./assets/fonts/Montserrat-SemiBold.ttf'),
        'Montserrat-SemiBoldItalic': require('./assets/fonts/Montserrat-SemiBoldItalic.ttf'),
        'Montserrat-Thin': require('./assets/fonts/Montserrat-Thin.ttf'),
        'Montserrat-ThinItalic': require('./assets/fonts/Montserrat-ThinItalic.ttf'),
        'PlayfairDisplay-Black': require('./assets/fonts/PlayfairDisplay-Black.ttf'),
        'PlayfairDisplay-BlackItalic': require('./assets/fonts/PlayfairDisplay-BlackItalic.ttf'),
        'PlayfairDisplay-Bold': require('./assets/fonts/PlayfairDisplay-Bold.ttf'),
        'PlayfairDisplay-BoldItalic': require('./assets/fonts/PlayfairDisplay-BoldItalic.ttf'),
        'PlayfairDisplay-ExtraBold': require('./assets/fonts/PlayfairDisplay-ExtraBold.ttf'),
        'PlayfairDisplay-ExtraBoldItalic': require('./assets/fonts/PlayfairDisplay-ExtraBoldItalic.ttf'),
        'PlayfairDisplay-Italic': require('./assets/fonts/PlayfairDisplay-Italic.ttf'),
        'PlayfairDisplay-Medium': require('./assets/fonts/PlayfairDisplay-Medium.ttf'),
        'PlayfairDisplay-MediumItalic': require('./assets/fonts/PlayfairDisplay-MediumItalic.ttf'),
        'PlayfairDisplay-Regular': require('./assets/fonts/PlayfairDisplay-Regular.ttf'),
        'PlayfairDisplay-SemiBold': require('./assets/fonts/PlayfairDisplay-SemiBold.ttf'),
        'PlayfairDisplay-SemiBoldItalic': require('./assets/fonts/PlayfairDisplay-SemiBoldItalic.ttf')
    });
    console.disableYellowBox = true;

    const status ="2";
    if (!fontsLoaded) {
        return <AppLoading />;
    } return <RegisterScreen />
  
       

    
    
}
const styles = StyleSheet.create({
container:{
    flex:1,
    justifyContent:"center"
}
})
export default App

