import React, {memo, useCallback, useRef,useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,Image, TextInput, Button, KeyboardAvoidingView, Alert
} from 'react-native';
import {height_screen, width_screen} from 'ultis/dimensions';
import {useNavigation} from '@react-navigation/native';
import ROUTES from 'ultis/routes';




const loginScreen = memo(() => {

  const[username,setUsername]=useState();
  const[password,setPassword]=useState();
  const {navigate} = useNavigation();

  const Signup = useCallback(() => {
    navigate(ROUTES.Register);
  }, [navigate]);


  
  const Login = async() => {
    console.log(username + " " + password)
    if(username!="" && password!=""){
      await fetch('https://dont-be-quiet.herokuapp.com/activist/login',{
        method:'POST',
        headers:{
          'Accept': 'applicattion/json',
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          "username" : username,
          "password": password

        })


      }).then(res=>res.json())
      .then(resData=>{
        
        navigate(ROUTES.Register);
      })
    }
  };
  

  return (
    
    <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: "#1D1D1B",
          justifyContent: "flex-end",
        }}>
          
          <KeyboardAvoidingView style={{flex:1}} behavior="padding">
        <View style={styles.images}>
        <Image
            style={styles.tinyLogo}
            source={require('../../assets/StartScreen/Logo.png')}
        />
        </View>
       
        <View style={styles.background}>
        <Text style={styles.title}>Login</Text>
        
        <View style={styles.title2}>
        <TextInput
        autoFocus={true}
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={(anything)=>setUsername(anything)}
        />
        
        <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={(pass)=>setPassword(pass)}
        />
      
        </View>
       
        
        
        
        <View style={styles.title3}>
        <TouchableOpacity onPress={Login} style={{backgroundColor:"black",borderRadius:100,width:width_screen - 100,height:50,justifyContent:"center"}}><Text style={{color:"#6BB981",fontSize:22,textAlign:"center"}}>Login</Text></TouchableOpacity>
       
        <Button
  title="Don't haven an account yet? Sign up"
  color="black"
  onPress={Signup}
/>
        </View>
      
        </View>
        </KeyboardAvoidingView>
        
    </SafeAreaView>
  );
});

const styles = StyleSheet.create({
    container: {
            flex: 1,
            justifyContent: 'center',
           
            flexDirection: "column"
            
          },
        images:{
            flex: 1, 
           marginHorizontal:80,
           height:10,
           justifyContent:"center",
           alignItems:"center"
           
          },
          background:{
           borderTopLeftRadius:70,
            flex: 3, backgroundColor: "white",
            alignItems:"center",
          
          },
          tinyLogo: {
            width: 100,
            height: 100,
          },
          title:{
            fontSize:25,
            fontWeight:"bold",
            flex:1,
            marginVertical:10
        
          },title2:{
          justifyContent:"space-evenly",
        
             flex:3,
           
          },input: {
            height: 50,
            borderBottomColor:"gray",
            borderBottomWidth:1,
            width:width_screen - 100,
            marginVertical:20
           
          },
        title3:{
        justifyContent:"flex-end",
        flex:4,
        alignItems:"center",
       
        
           
          },
});
export default loginScreen;