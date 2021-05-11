import React, { Component } from "react";
import { Image, View, TouchableOpacity, TextInput, Text,StyleSheet } from "react-native";
import CustomDatePicker from '../../Components/datePicker'
import { Ionicons } from '@expo/vector-icons';
export class step2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalSteps: "",
      currentStep: ""
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
    saveState({ birthday:"00-00-0000" });
  
    next();
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
                                value=""
                                placeholder={"birthday"}
                                placeholderTextColor="#fff"
                                
                            />

      <View style={[styles.container]}>
        <View style={styles.btnContainer}>
          <TouchableOpacity onPress={this.nextStep} style={{backgroundColor:"#1D1D1B",paddingHorizontal:100,paddingVertical:10,borderRadius:100}}>
            <Text style={{color:"#70B62E",textAlign:"center",fontSize:19}}>Continue</Text>
          </TouchableOpacity>
        </View>
        <CustomDatePicker />
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