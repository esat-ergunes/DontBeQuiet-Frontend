import * as TYPES from "../types";

//Email Validation Action
export const loginRequest = (params, cbSuccess, cbFailure) => {
  return {
    type: TYPES.LOGIN_REQUEST_REQUEST,
    params,
    cbSuccess,
    cbFailure,
  };
};

export const signupRequest = (params, cbSuccess, cbFailure) => {
  return {
    type: TYPES.SIGNUP_REQUEST_REQUEST,
    params,
    cbSuccess,
    cbFailure,
  };
};

//Logout Action
export const logoutRequest = (cbSuccess, cbFailure) => {
  return {
    type: TYPES.LOGOUT_REQUEST_REQUEST,
    cbSuccess,
    cbFailure,
  };
};

//forgotPassword Action
export const forgotPasswordRequest = (params, cbSuccess, cbFailure) => {
  return {
    type: TYPES.FORGOTPASSWORD_REQUEST_REQUEST,
    params,
    cbSuccess,
    cbFailure,
  };
};

//verifyOtp Action
export const verifyOtpRequest = (params, cbSuccess, cbFailure) => {
  return {
    type: TYPES.VERIFYOTP_REQUEST_REQUEST,
    params,
    cbSuccess,
    cbFailure,
  };
};

//changePassword Action
export const changePasswordRequest = (params, token, cbSuccess, cbFailure) => {
  console.log("token", token);
  return {
    type: TYPES.CHANGEPASSWORD_REQUEST_REQUEST,
    params,
    token,
    cbSuccess,
    cbFailure,
  };
};
