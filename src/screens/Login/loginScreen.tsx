import React, {memo, useCallback, useRef} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,Image, TextInput, Button, KeyboardAvoidingView
} from 'react-native';
import {height_screen, width_screen} from 'ultis/dimensions';





const loginScreen = memo(() => {

  
  const Login = () => {
    console.log("go to register page")
  };
  const Signup = () => {
    console.log("go to register page")
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
        placeholder="Email"/>
        
        <TextInput
        style={styles.input}
        placeholder="Password"/>
      
        </View>
       
        
        
        
        <View style={styles.title3}>
        <TouchableOpacity style={{backgroundColor:"black",borderRadius:100,width:width_screen - 100,height:50,justifyContent:"center"}}><Text style={{color:"#6BB981",fontSize:22,textAlign:"center"}}>Login</Text></TouchableOpacity>
       
        <Button
  title="Don't haven an account yet? Sign up"
  color="black"
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