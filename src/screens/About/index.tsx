import React, {memo, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import HeaderProfile from 'screens/About/components/HeaderProfile';
import jwtDecode from 'jwt-decode';
import AsyncStorage from '@react-native-community/async-storage';
import dontBeQuietApi from "../../api/dontBequiet";
import getUserlocation from '../../api/getUserlocation';

const item = {
  coverImage: require('assets/Profile/CoverImage.png'),
  avatar: require('assets/Profile/Avatar.png'),
  userName: 'Hieu Le',
  address: 'Brussel, BE',
  followers: '1.5M',
  following: 3,
  numberMessage: 2,
  reward: 15,
  interested: ['#noracismo', ' #Climate', ' #nature',' #sustainability'],
  notification: 1,
};



const About = memo(() => {
  const [uId,setUid] = useState<any|null>(null);
  const [username,setUsername] = useState<any | null>(null);
  const [following,setFollowing] = useState<any | null>(null);
  const [interests,setInterests] = useState<any | null>(null);
  const [userLat,setUserLat] = useState<any | null>(null);
  const [userLong,setUserLong] = useState<any | null>(null);
  const [userCity,setUserCity] = useState<any | null>(null);

  async function _getUserData(){
    const token = await AsyncStorage.getItem("token");
    const decodeData = jwtDecode(token);
    const AuthStr = 'Bearer '+token;
    const userId = decodeData.uid;
    await AsyncStorage.setItem("uId",userId);
    //console.log(decodeData);
    setUid(userId);
    try {
      if(decodeData.default != true){

      
      const response = await dontBeQuietApi.get("/activist/"+userId,{headers:{Authorization:AuthStr}})
      setUsername(response.data.data.data.username);
      setFollowing(response.data.data.data.following);
      setInterests(response.data.data.data.interests);
      setUserLat(response.data.data.data.latitude);
      setUserLong(response.data.data.data.longitude);
      const getUserLocation = await getUserlocation.get("/"+userLat+","+userLong+"?geoit=json")
      //setUserCity(getUserLocation.data.city)
       //console.log(getUserLocation);
      //console.log(response.data.data.data);
      
      //console.log(response.data.data.data.interests)
    }else if(decodeData.default == true){
      const response = await dontBeQuietApi.get("/organization/"+userId,{headers:{Authorization:AuthStr}})
      setUsername(response.data.data.data.username);
      setFollowing(response.data.data.data.following);
      setInterests(response.data.data.data.interests);
      setUserLat(response.data.data.data.latitude);
      setUserLong(response.data.data.data.longitude);
      
      //console.log(userCity);
      
     
    }
    if(userCity === undefined){
      setUserCity(null);
    }else{
      const getUserLocation = await getUserlocation.get("/"+userLat+","+userLong+"?geoit=json")
      setUserCity(getUserLocation.data.city)
    }
    
    } catch (error) {
      //console.log(error.message)
    }

  }
  _getUserData();


  return (
    <View style={styles.container}>
      <HeaderProfile
        coverImage={item.coverImage}
        avatar={item.avatar}
        userName={username}
        address={userCity}
        numberMessage={item.numberMessage}
        rewards={item.reward}
        interested={item.interested}
        followers={item.followers}
        following={following}
        notification={item.notification}
      />
    </View>
   
  );
});

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});
