import { takeLatest, put } from "redux-saga/effects";
import {
  LOGIN_REQUEST_REQUEST,
  LOGIN_REQUEST_SUCCESS,
  LOGIN_REQUEST_FAILURE,
  SIGNUP_REQUEST_REQUEST,
  SIGNUP_REQUEST_SUCCESS,
  SIGNUP_REQUEST_FAILURE,
  // LOGOUT_REQUEST_REQUEST,
  // LOGOUT_REQUEST_SUCCESS,
  // FORGOTPASSWORD_REQUEST_SUCCESS,
  // FORGOTPASSWORD_REQUEST_REQUEST,
  // FORGOTPASSWORD_REQUEST_FAILURE,
  // VERIFYOTP_REQUEST_REQUEST,
  // VERIFYOTP_REQUEST_SUCCESS,
  // VERIFYOTP_REQUEST_FAILURE,
  // CHANGEPASSWORD_REQUEST_SUCCESS,
  // CHANGEPASSWORD_REQUEST_REQUEST,
  // CHANGEPASSWORD_REQUEST_FAILURE,
} from "../../actions/types";
import Api from "../../../services/apis/api";
import { endPoints } from "../../../services";

function* loginRequest() {
  yield takeLatest(LOGIN_REQUEST_REQUEST, login);
  yield takeLatest(SIGNUP_REQUEST_REQUEST, signup);
  // yield takeLatest(LOGOUT_REQUEST_REQUEST, logout);
  // yield takeLatest(FORGOTPASSWORD_REQUEST_REQUEST, forgotPassword);
  // yield takeLatest(VERIFYOTP_REQUEST_REQUEST, verifyOtp);
  // yield takeLatest(CHANGEPASSWORD_REQUEST_REQUEST, changePassword);
}

function* login(params) {
  console.log("[login saga]", params);
  try {
    let response = yield Api.postRequest(
      endPoints.login,
      params.params,
      params.token
    );
    console.log("response - - - >>>> ", response);
    if (response) {
      params.cbSuccess(response);
      yield put({ type: LOGIN_REQUEST_SUCCESS, data: response });
    } else {
      params.cbFailure("Invalid email and password");
      yield put({ type: LOGIN_REQUEST_FAILURE, data: response });
    }
  } catch (error) {
    console.log("error from login request saga -- > > >  > ", error);
    params.cbFailure(error);
  }
}

function* signup(params) {
  console.log("[login saga]", params);
  try {
    let response = yield Api.postRequest(
      endPoints.register,
      params.params,
      params.token
    );
    console.log("response - - - >>>> ", response);
    if (response) {
      params.cbSuccess(response);
      yield put({ type: SIGNUP_REQUEST_SUCCESS, data: response });
    } else {
      params.cbFailure("Invalid email and password");
      yield put({ type: SIGNUP_REQUEST_FAILURE, data: response });
    }
  } catch (error) {
    console.log("error from login request saga -- > > >  > ", error);
    params.cbFailure(error);
  }
}

// function* logout(params) {
//   try {
//     // let response = yield Api.postRequest(endPoints.logout, null, params.params);
//     // console.log("response --- >>>> ", response);
//     // if (response) {
//     //   if (response?.data?.status === 200) {
//     //     params.cbSuccess(response);
//     yield put({ type: LOGOUT_REQUEST_SUCCESS });
//     params.cbSuccess();
//     //   } else {
//     //     params.cbFailure("Token expired");
//     //   }
//     // } else {
//     //   params.cbFailure("Invalid email and password");
//     // }
//   } catch (error) {
//     console.log("error from login request saga -- > > >  > ", error);
//     params.cbFailure(error);
//   }
// }

// function* forgotPassword(params) {
//   try {
//     let response = yield Api.postRequest(
//       endPoints.forgotPassword,
//       params.params,
//       null
//     );
//     console.log("response in forgotPassword --- >>>> ", response);
//     if (response.status == 200) {
//       params.cbSuccess(response.data);
//       yield put({ type: FORGOTPASSWORD_REQUEST_SUCCESS, data: response.data });
//     } else {
//       params.cbFailure("Invalid email and password");
//       yield put({ type: FORGOTPASSWORD_REQUEST_FAILURE, data: response.data });
//     }
//   } catch (error) {
//     console.log("error from forgot password request saga -- > > >  > ", error);
//     params.cbFailure(error);
//   }
// }

// function* verifyOtp(params) {
//   try {
//     let response = yield Api.putRequest(
//       endPoints.verifyOtp,
//       params.params,
//       null
//     );
//     console.log("response in verify OTP --- >>>> ", response);
//     if (response.status == 200) {
//       params.cbSuccess(response.data);
//       yield put({ type: VERIFYOTP_REQUEST_SUCCESS, data: response.data });
//     } else {
//       params.cbFailure("Invalid email and password");
//       yield put({ type: VERIFYOTP_REQUEST_FAILURE, data: response.data });
//     }
//   } catch (error) {
//     console.log("error from verify OTP request saga -- > > >  > ", error);
//     params.cbFailure(error);
//   }
// }

// function* changePassword(params) {
//   console.log("params", params);
//   try {
//     let response = yield Api.putRequest(
//       endPoints.changePassword,
//       params.params,
//       params.token
//     );
//     console.log("response in verify OTP --- >>>> ", response);
//     if (response.status == 200) {
//       params.cbSuccess(response.data);
//       yield put({ type: CHANGEPASSWORD_REQUEST_SUCCESS, data: response.data });
//     } else {
//       params.cbFailure("Invalid email and password");
//       yield put({ type: CHANGEPASSWORD_REQUEST_FAILURE, data: response.data });
//     }
//   } catch (error) {
//     console.log("error from verify OTP request saga -- > > >  > ", error);
//     params.cbFailure(error);
//   }
// }
export default loginRequest;
