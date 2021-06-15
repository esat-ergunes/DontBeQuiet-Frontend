import React, { Component } from "react";
import { Image, View, TouchableOpacity, TextInput, Text,StyleSheet } from "react-native";
import CustomDatePicker from '../../Components/datePicker'
import { Ionicons } from '@expo/vector-icons';
export class step2 extends Component {
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

    if(!this.state.birthday){
      const message = "Birthday is required";
      this.setState({messageError2:message})
    }else{
      let dateReg = /^\d{2}([./-])\d{2}\1\d{4}$/
      if (dateReg.test(this.state.birthday) === false) {
        const message = "Birthday is not valid"; 
        this.setState({messageError2:message})
      }else{
        const message = ""; 
        this.setState({messageError2:message})
     saveState({ birthday:this.state.birthday});

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
          >{`When's your birthday? `}</Text></View>
         
                              <TextInput
                                style={styles.input}
                                onChangeText={birthday => this.setState({ birthday })}
                                value={this.state.birthday}
                                placeholder={"DD-MM-YYYY"}
                                placeholderTextColor="gray"
                                autoCapitalize="none"
                                autoCorrect={false}
                                
                                
                                
                            />

      <View style={[styles.container]}>
        <View style={styles.btnContainer}>
          <TouchableOpacity onPress={this.nextStep} style={{backgroundColor:"#1D1D1B",paddingHorizontal:100,paddingVertical:10,borderRadius:100}}>
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
export default step2;