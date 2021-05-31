import React, {memo, useEffect, useState} from 'react';
import {ScrollView, View,TextInput, Platform,TouchableOpacity , StyleSheet,Text,Image} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { SafeAreaView } from 'react-native-safe-area-context';
import jwtDecode from 'jwt-decode';
import UserItem from '../../../components/UserItem';
import {height_screen, width_screen} from 'ultis/dimensions';
import ItemTag from 'screens/Filter/components/ItemTag';
import * as ImagePicker from 'expo-image-picker';
import {  } from 'react-native-svg';
const Add_Event = memo(() => {

  const[eventTitle,setEventTitle]=useState();
  const[eventDate,setEventDate]=useState();
  const [eventPhoto,setEventPhoto]=useState();
  const[eventPlace,setEventPlace]=useState();
  const [eventTags,setEventTags]=useState([]);//Tags are the same thing like on the register page interests
  const [eventDescription,setEventDescription]=useState();
  const [organizationId,setorganizationId]=useState();
  
  async function _getUserData(){
    const token = await AsyncStorage.getItem("token");
    const decodeData = jwtDecode(token);

    setorganizationId(decodeData.uid)
    
  }
  _getUserData();

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const {status} = await ImagePicker.getMediaLibraryPermissionsAsync()
        if (status !== 'granted') {
        
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    if (Platform.OS !== 'web') {
      const {status} = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        console.log(status)
      
      }else{
        console.log(status)
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
        if (!result.cancelled) {
          setEventPhoto(result.uri);
        }
      }
    }
   
    
  };







  
  return (
    <ScrollView>
<View>
     <TouchableOpacity style={{backgroundColor:"red",height:300,marginHorizontal:20,marginVertical:20}}
     onPress={pickImage}
     >
    <Image
        style={{height:300}}
        source={{
          uri: eventPhoto,
        }}
      />

     </TouchableOpacity>
     
     <TextInput
          style={styles.input}
          value={eventTitle}
          onChangeText={(title)=>setEventTitle(title)}
          placeholder={"Event title"}
          placeholderTextColor="black"
          autoFocus={true}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TextInput
          style={styles.input}
          value={eventDate}
          onChangeText={(eventDate)=>setEventDate(eventDate)}
          placeholder={"Date "}
          placeholderTextColor="black"
          autoFocus={true}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TextInput
          style={styles.input}
          value={eventPlace}
          onChangeText={(eventPlace)=>setEventPlace(eventPlace)}
          placeholder={"Adress "}
          placeholderTextColor="black"
          autoFocus={true}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TextInput
          style={styles.input}
          value={eventDescription}
          onChangeText={(eventDescription)=>setEventDescription(eventDescription)}
          placeholder={"Description "}
          placeholderTextColor="black"
          autoFocus={true}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <View
        style={{marginTop:20,marginHorizontal:20}}><Text>Choose Event tag</Text>
         <View style={styles.hashTagView}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <ItemTag active={false} tagName={'#Gender Equality'} />
            <ItemTag active={true} tagName={'#LGBTQ+'} />
            <ItemTag active={false} tagName={'#Climate change'} />
            <ItemTag active={false} tagName={'#Animal rights'} />
          </ScrollView>
        </View>
        
     </View>
     <View style={{display:"flex",flex:1,alignItems:"center",marginVertical:30}}><TouchableOpacity onPress={()=>{}} style={{backgroundColor:"black",borderRadius:100,width:width_screen - 100,height:50,justifyContent:"center"}}><Text style={{color:"#6BB981",fontSize:22,textAlign:"center"}}>Post</Text></TouchableOpacity></View>
     </View>
     </ScrollView>
  );
});

const styles = StyleSheet.create({
  container: {
          flex: 1,
          justifyContent: 'center',
         backgroundColor:"white",
          flexDirection: "column"
          
        },input: {
        marginHorizontal:20,
          height: 30,
          borderBottomColor:"gray",
          borderBottomWidth:1,
          marginVertical:10
         
        },hashTagView: {
        flexDirection: 'row',
        marginTop: 24,
        marginBottom: 40,
      },box:{
        height:100,
        borderColor:"black"
      }
});
export default Add_Event;
