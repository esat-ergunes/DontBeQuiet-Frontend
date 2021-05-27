import createDataContext from './createDataContext'
import dontBeQuietApi from '../api/dontBequiet';
import AsyncStorage from "@react-native-community/async-storage";
import {useNavigation} from '@react-navigation/native';
import ROUTES from 'ultis/routes';

const authReducer = (state,action) => {

    switch (action.type){
       
        case 'add_error':
            return { ...state, errorMessage: action.payload };
            case 'signup':
            return { errorMessage:'',token: action.payload};
        default:
            return state;
    }
};




const signup = (dispatch)=>async ({email,password,username})=>{
  
   
        // make api request to sign up  with email password 
        
        try {
            const response = await dontBeQuietApi.post('/activist/signup',{email,password,username}).then(async function (response) {
                // handle success
                //console.log(response.data.data.token);
                await AsyncStorage.setItem('token',response.data.data.token);
           dispatch({type:'signup',payload:response.data.data.token});
            //console.log(response.data.data.token);
            //await AsyncStorage.setItem('token','eeeeeeeeeeeeeeee')
            //dispatch({type:'signup',payload:response.data.token})
            //console.log(response.data.token);
              })
              .catch(function (error) {
                // handle error
                console.log(error);
              })
           
            
        } catch (err) {
            dispatch({type:'add_error', payload:'Something went wrong with sign up'})
          
            //console.log(err.message)
            
        }
        // if user sign up, modify our state, and say that are authenticated

        //if fail show error
    };

const signin = (dispatch)=>{
    return ({email,password})=>{
        // make api request to sign up  with email password 
        
        // if user sign up, modify our state, and say that are authenticated

        //if fail show error
    };
};

const signout = (dispatch)=>{
    return ()=>{
        // sign out
    };
};


export const {Provider,Context}=createDataContext(
authReducer,
{signin,signout,signup},
{token:null,errorMessage: ''}
);


