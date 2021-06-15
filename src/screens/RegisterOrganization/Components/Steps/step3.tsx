import React, { Component } from "react";
import { Image, View, TouchableOpacity, TextInput, Text,StyleSheet } from "react-native";
import CustomDatePicker from '../datePicker'
import { Ionicons } from '@expo/vector-icons';
export class step3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalSteps: "",
      currentStep: "",
      messageError2:"",
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
    const { next, saveState } = this.props;
    if(!this.state.vat){
      const message = "VAT number is required";
     
      this.setState({messageError2:message})
    }else{
      if(isNaN(this.state.vat))
      {
        // If the Given Value is Not Number Then It Will Return True and This Part Will Execute.
        const message = "Please enter a valid VAT number";
        this.setState({messageError2:message})
      }
      else
      {
        if(this.state.vat.length != 10){
          const message = "VAT number should be 10 digits";
          this.setState({messageError2:message})
        }else if(this.state.vat.length == 10){
          // If the Given Value is Number Then It Will Return False and This Part Will Execute.
       const message = "";
       this.setState({messageError2:message})
         saveState({ vat:this.state.vat});
       next();
        }
       

        
       
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
          >{`What's your organization's VAT number?`}</Text><Text
          style={{textAlign:"center",fontSize:14,marginHorizontal:5,color:"gray"}}
        >{`We ask it for authentification check`}</Text></View>
         
                            
                            <TextInput
          style={styles.input}
          onChangeText={vat => this.setState({ vat })}
          value={this.state.vat}
          placeholder={"VAT nummber"}
          placeholderTextColor="black"
          autoFocus={true}
          keyboardType="number-pad"
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
export default step3;