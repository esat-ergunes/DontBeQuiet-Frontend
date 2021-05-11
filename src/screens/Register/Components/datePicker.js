import React,{useState} from 'react';
import {Modal,StyleSheet,Text,TouchableHighlight,View,Platform, Button} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import { TextInput } from 'react-native-gesture-handler';


const CustomDatePicker =(props)=>{
    

    
    const [date,setDate] = useState(moment());
    const [show,setShow] = useState(false);
    
    const onChange = (e, selectedDate)=>{
        setDate(moment(selectedDate));
        
        console.log(moment(selectedDate).format('DD-MM-YYYY'))
        
       //this.setState({birthday:moment(selectedDate).format('DD-MM-YYYY')})
       
    };


return(
    
    <View style={{display:"flex"}}>
        
               
                        <View >
                            <View style={{flex: 1}}>
                        <DateTimePicker 
                        timeZoneOffsetInMinutes={0}
                        value={new Date(date)}
                        mode='date'
                        minimumDate={new Date(moment().subtract(120,'years').format("YYYY-MM-DD"))}
                        maximumDate={new Date(moment().format("YYYY-MM-DD"))}
                        onChange={onChange}
                        display="spinner"
                       
                        />
                        
                        </View>
                        
                        </View>

                  
    
    </View>
);
}

CustomDatePicker.defaultProps={

};

const styles = StyleSheet.create({
    
          input: {
                height: 30,
            borderBottomColor:"gray",
            borderBottomWidth:1,
            marginVertical:10
           
          }
});
export default CustomDatePicker;
