import createDataContext from './createDataContext'
import dontBeQuietApi from '../api/dontBequiet';

const authReducer = (state,action) => {

    switch (action.type){
        case 'add_error':
            return { ...state, errorMessage: action.payload}
        default:
            return state;
    }
};


const signup = (dispatch)=>{
    return async ({email,password,username})=>{
        // make api request to sign up  with email password 
        try {
            const response = await dontBeQuietApi.post('/activist/signup',{email,password,username})
            console.log(response.data);
        } catch (err) {
            dispatch({type:'add_error', payload:'Something went wrong with sign up'})
        }
        // if user sign up, modify our state, and say that are authenticated

        //if fail show error
    };
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
{isSignedIn:false,errorMessage:''}
);