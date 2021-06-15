import React, { Component } from "react";
import { Image, View, TouchableOpacity, TextInput, Text,StyleSheet } from "react-native";
import CustomDatePicker from '../../Components/datePicker'
import { Ionicons } from '@expo/vector-icons';
export class step6 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalSteps: "",
      currentStep: "",
      messageError2:""
    };
    
  }
  static getDerivedStateFromProps = props => {
    const { getTotalSteps, getCurrentStep , tests } = props;
    return {
      totalSteps: getTotalSteps(),
      currentStep: getCurrentStep()
    };
  };

  nextStep = () => {

    if(!this.state.password){
      const message = "Password is required"; 
    this.setState({messageError2:message})
    }else{


      let regex = new RegExp("^(?=.{8,})");
      if (regex.test(this.state.password) === false) {
        const message = "Your password must be at least 8 characters long"; 
        this.setState({messageError2:message})
      }else {
        const message = "";
        const { next, saveState } = this.props;
    saveState({ password:this.state.password});
    
    next();
      }
    }
  };

  render() {
    const { currentStep, totalSteps } = this.state;
    return (
      <>
      
          <View style={{display:"flex", flexDirection:"row",alignItems:"center"}}>
          <TouchableOpacity onPress={this.props.back} style={{zIndex:300}}>
            <Ionicons name="ios-chevron-back-outline" size={34} color="black" />
          </TouchableOpacity>
          
          
        </View>
        <View style={{marginVertical:30}}>
          <Text
            style={{textAlign:"center",fontSize:24,marginHorizontal:5}}
          >{`Set a password `}</Text><Text
          style={{textAlign:"center",fontSize:14,marginHorizontal:5,color:"gray"}}
        >{`Your password should be at least 8 characters.`}</Text></View>
         
                            
                            <TextInput
          style={styles.input}
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
          placeholder={"password"}
          placeholderTextColor="black"
          autoFocus={true}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
        />

      <View style={[styles.container]}>
       
      
      
        
        
        <View style={styles.btnContainer}>
          <TouchableOpacity onPress={this.nextStep} style={{backgroundColor:"#1D1D1B",paddingHorizontal:100,paddingVertical:10,borderRadius:100}} 
          
          >
            <Text style={{color:"#70B62E",textAlign:"center",fontSize:19}}>Continue</Text>
          </TouchableOpacity>
        </View>
        {!this.state.messageError2?null:<Text style={{color:"red",fontSize:16,textAlign:"center",marginTop:10}}>{this.state.messageError2}</Text>}
      </View>
      </>
    );
  }
}
const styles = StyleSheet.create({
    container: {
            flex: 1,
            justifyContent: 'center',
            flexDirection: "column"
          },
          input: {
            height: 30,
            borderBottomColor:"gray",
            borderBottomWidth:1,
            marginVertical:10
           
          },
        btnContainer:{
            display:"flex",
            flexDirection:"row",
            justifyContent:"space-around"
        }
       
});
export default step6;