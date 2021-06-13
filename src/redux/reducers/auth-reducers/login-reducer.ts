import * as TYPES from "../../actions/types";

const initialState = {
  loading: false,
  user: null,
  token: "",
  isLoggedIn: false,
  error: null,
  isSuccess: false,
  isFailure: false,
};
const loginReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case TYPES.LOGIN_REQUEST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case TYPES.LOGIN_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        userProfile: null,
        error: actions.data,
        isLoggedIn: false,
        isSuccess: false,
        isFailure: true,
      };
    case TYPES.LOGIN_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        user: actions.data.data,
        token: actions.data.data.token,
        isLoggedIn: true,
        isSuccess: true,
        isFailure: false,
      };

    case TYPES.SIGNUP_REQUEST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case TYPES.SIGNUP_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        userProfile: null,
        error: actions.data,
        isLoggedIn: false,
        isSuccess: false,
        isFailure: true,
      };
    case TYPES.SIGNUP_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        user: actions.data.data.user,
        token: actions.data.token,
        isLoggedIn: true,
        isSuccess: true,
        isFailure: false,
      };

    default:
      return state;
  }
};
export default loginReducer;
