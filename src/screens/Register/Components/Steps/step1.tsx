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
   

    if(!this.state.firstname || !this.state.lastname ){
      const message = "First and last name are required";
      this.setState({messageError2:message})
      
    }else if(this.state.firstname || this.state.lastname ){
      const message="";
      this.setState({messageError2:message})
      // Save state for use in other steps
    saveState({ name: this.state.firstname, lastname: this.state.lastname });

    // Go to next step
    next();
    }






  };

  goBack() {
    const { back } = this.props;
    console.log(this.props);
    back();
  }

  Privacy() {
    console.log("Privacy");
  }

  TermsOfService() {
    console.log("Terms Of Service");
  }

  GoRegisterOrganization() {
    // ...
    console.log("here");

    RootNavigation.navigate(ROUTES.RegisterOrganization);
  }
  GoBack() {
    console.log(this.props);
  }

  render() {
    const { currentStep, totalSteps } = this.state;
    return (
      <View style={[styles.container, styles.step1]}>
        <View>
          <Text
            style={{ textAlign: "center", marginTop: -10, fontSize: 24 }}
          >{`What's your name? `}</Text>
        </View>
        <TextInput
          style={styles.input}
          onChangeText={(firstname) => this.setState({ firstname })}
          value={this.state.firstname}
          placeholder={"First Name"}
          placeholderTextColor="gray"
          autoFocus={true}
          autoCapitalize="none"
          autoCorrect={false}
        />

        <TextInput
          style={styles.input}
          onChangeText={(lastname) => this.setState({ lastname })}
          value={this.state.lastname}
          placeholder={"Last Name"}
          placeholderTextColor="gray"
          autoCapitalize="none"
          autoCorrect={false}
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
        <View>
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
        <View style={{ marginTop: 20 }}>
          <TouchableOpacity onPress={() => this.GoRegisterOrganization()}>
            <Text style={{ color: "black", textAlign: "center" }}>
              I'm an organization
            </Text>
          </TouchableOpacity>
        </View>
        {!this.state.messageError2?null:<Text style={{color:"red",fontSize:16,textAlign:"center",marginTop:10}}>{this.state.messageError2}</Text>}
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
