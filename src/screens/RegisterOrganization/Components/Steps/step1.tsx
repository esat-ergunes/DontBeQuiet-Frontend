import React, { Component } from "react";
import {
  Image,
  View,
  TouchableOpacity,
  TextInput,
  Text,
  StyleSheet,
  Button,
} from "react-native";
import ROUTES from "ultis/routes";
// any js module
import * as RootNavigation from "../../../../nav/RootNavigation";

class step1 extends Component {
  constructor(props) {
    super(props);
    console.log("props", props);
    this.state = {
      totalSteps: "",
      currentStep: "",
      messageError2:"",
    };
  }

  static getDerivedStateFromProps = (props) => {
    const { getTotalSteps, getCurrentStep } = props;
    return {
      totalSteps: getTotalSteps(),
      currentStep: getCurrentStep(),
    };
  };

  nextStep = () => {
    const { next, saveState } = this.props;

    if(!this.state.organizationName){
      const message = "Organization name is required";
      this.setState({messageError2:message})
      
    }else if(this.state.organizationName){
      const message="";
      this.setState({messageError2:message})
      // Save state for use in other steps
    saveState({ organizationName: this.state.organizationName });

    // Go to next step
    next();
    }

    
  };

  goBack() {
    const { back } = this.props;
    console.log(this.props);
    back();
  }

  GoRegister() {
    // ...
    console.log("here");

    RootNavigation.navigate(ROUTES.Register);
  }

  Privacy() {
    console.log("Privacy");
  }

  TermsOfService() {
    console.log("Terms Of Service");
  }

  render() {
    const { currentStep, totalSteps } = this.state;
    return (
      <View style={[styles.container, styles.step1]}>
        <View>
          <Text
            style={{ textAlign: "center", marginTop: -10, fontSize: 24 }}
          >{`What's your organization name `}</Text>
        </View>
        <TextInput
          style={styles.input}
          onChangeText={(organizationName) =>
            this.setState({ organizationName })
          }
          value={this.state.organizationName}
          placeholder={"Organization name"}
          placeholderTextColor="black"
          autoFocus={true}
        />
        <View style={{ paddingVertical: 20 }}>
          <Text>
            By tapping Sign Up &amp; Accept, You acknowledge that you have read
            <Text style={{ color: "#70B62E" }} onPress={this.Privacy}>
              {" "}
              Privacy Police{" "}
            </Text>
            and agree to the
            <Text style={{ color: "#70B62E" }} onPress={this.TermsOfService}>
              {" "}
              Terms of Service
            </Text>
            .
          </Text>
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity
            onPress={this.nextStep}
            style={{
              backgroundColor: "#1D1D1B",
              padding: 15,
              borderRadius: 100,
            }}
          >
            <Text
              style={{ color: "#70B62E", textAlign: "center", fontSize: 19 }}
            >
              Sign Up &amp; Accept
            </Text>
          </TouchableOpacity>
        </View>
        {!this.state.messageError2?null:<Text style={{color:"red",fontSize:16,textAlign:"center",marginTop:10}}>{this.state.messageError2}</Text>}
        <View style={{ marginTop: 20 }}>
          <TouchableOpacity onPress={() => this.GoRegister()}>
            <Text style={{ color: "black", textAlign: "center" }}>
              I'm an activist
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "column",
  },
  input: {
    height: 30,
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    marginVertical: 10,
  },
});
export default step1;
