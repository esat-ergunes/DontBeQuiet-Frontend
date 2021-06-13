import React, {memo, useCallback, useRef} from 'react';
import {
  Animated,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,Image
} from 'react-native';
import {height_screen, width_screen} from 'ultis/dimensions';
import FONTS from 'ultis/fonts';
import {getBottomSpace} from 'react-native-iphone-x-helper';
import {useNavigation} from '@react-navigation/native';
import ROUTES from 'ultis/routes';

import { Video, AVPlaybackStatus } from "expo-av";

const startScreen = memo(() => {
  
  const video = React.useRef(null);
  const scrollX = useRef(new Animated.Value(0)).current;
  const {navigate} = useNavigation();

  const GoRegister = useCallback(() => {
    navigate(ROUTES.Register);
  }, [navigate]);


 const GoLogin = useCallback(() => {
    navigate(ROUTES.Login);
  }, [navigate]);

  return (
    <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: "#1D1D1B",
          justifyContent: "flex-end",
        }}
      >
    <View style={{ flex: 1, alignItems: "center"}}>
          <Image
            style={{ width:"3%",height:"3%" ,padding:"20%",}}
            source={require('../../assets/StartScreen/Logo.png')}
          />
          <View style={{ flex: 1, justifyContent: "center" }}>
            <Text
              style={{
                color: "white",
                fontSize: 70,
                fontFamily: "Helvetica Neue",
                fontWeight: "bold",
                letterSpacing: -3,
              }}
            >
              Bring
            </Text>
            <Text
              style={{
              //color: "white",
                fontSize: 90,
                fontFamily: "Helvetica Neue",
                fontWeight: "bold",
                color: "#70B62E",
                marginTop: -29,
              }}
            >
              activism
            </Text>
            <Text
              style={{
                color: "white",
                fontSize: 70,
                fontFamily: "Helvetica Neue",
                fontWeight: "bold",
                marginTop: -30,
              }}
            >
              home
            </Text>
          </View>
        </View>
        <View style={styles.buttonGroup}>
          <TouchableOpacity style={styles.buttonActivist} onPress={GoRegister}>
          
            <Text style={styles.font}>Let's get started</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{marginTop:20}} onPress={GoLogin}>
            <Text style={{fontSize:16, color:"white"}}>Already have an account?</Text>
          </TouchableOpacity>
       
        </View>
        <View style={{flex:1, zIndex:-10, position:'absolute',height:"100%", justifyContent:"center",alignContent:"center"}}> 
          <Video
            ref={video}
            style={styles.video}
            source={require("../../assets/StartScreen/activists.mp4")}
            resizeMode="cover"
            shouldPlay
            isLooping
            rate={1}
          />
        </View>
    </SafeAreaView>
  );
});


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainerStyle: {
    width: width_screen * 3,
    height: height_screen,
  },
  note: {
    fontSize: 14,
    fontFamily: FONTS.Regular,
    color: '#FFF',
    position: 'absolute',
    bottom: height_screen * 0.17,
    alignSelf: 'center',
  },
  bottom: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingBottom: getBottomSpace() + 32,
    flexDirection: 'row',
    paddingHorizontal: width_screen * 0.064,
    justifyContent: 'space-between',
  },
  btnFb: {
    width: width_screen * 0.41,
    height: 50,
    backgroundColor: '#3B5998',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTwitter: {
    width: width_screen * 0.41,
    height: 50,
    backgroundColor: '#1DA1F2',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonGroup: {
    position: "relative",
    flexDirection: "column",
    justifyContent: "center",
    paddingBottom: 20,
    alignItems: "center",
  },
  buttonActivist: {
    

    paddingVertical:20,
    borderWidth:2,
    borderColor:"white",
    width:"75%",
    textAlign:"center",
    borderRadius:100,
   
    alignItems:"center",
  },
  buttonOrganisation: {
    textAlign:"center",
    alignItems:"center",
    paddingVertical:20,
    width:"100%",
  },

  font: {
    fontSize: 20,
    fontWeight:"700",
    letterSpacing: 2,
    color: "white",
  },fontOrganization:{
    marginBottom:-10,
    marginTop:10,
    fontSize: 20,
    fontWeight:"600",
    color: "white",
    letterSpacing: 2,
  },
  line: {
    backgroundColor: "white",
    flex: 1 / 90,
  },
  video: {
   
      position: "absolute",
      top:-90,
      left: 0,
      bottom: 0,
      right: 0,
      width:500,
  
  },
});
export default startScreen;