import { takeLatest, put } from "redux-saga/effects";
import {
  INTEREST_REQUEST_FAILURE,
  INTEREST_REQUEST_REQUEST,
  INTEREST_REQUEST_SUCCESS,
  UNINTEREST_REQUEST_SUCCESS,
  UNINTEREST_REQUEST_FAILURE,
  UNINTEREST_REQUEST_REQUEST,
} from "../../actions/types";

function* interestsRequest() {
  yield takeLatest(INTEREST_REQUEST_REQUEST, interest);
  yield takeLatest(UNINTEREST_REQUEST_REQUEST, unInterest);
  // yield takeLatest(FORGOTPASSWORD_REQUEST_REQUEST, forgotPassword);
  // yield takeLatest(VERIFYOTP_REQUEST_REQUEST, verifyOtp);
  // yield takeLatest(CHANGEPASSWORD_REQUEST_REQUEST, changePassword);
}

function* interest(params) {
  console.log("[interest saga]", params);
  try {
    yield put({ type: INTEREST_REQUEST_SUCCESS, data: params });
  } catch (error) {
    yield put({ type: INTEREST_REQUEST_FAILURE, data: error });

    console.log("error from interest request saga -- > > >  > ", error);
  }
}
function* unInterest(obj) {
  console.log("[uninterest saga]", obj);
  try {
    yield put({ type: UNINTEREST_REQUEST_SUCCESS, data: obj });
  } catch (error) {
    yield put({ type: UNINTEREST_REQUEST_FAILURE, data: error });

    console.log("error from uninterest request saga -- > > >  > ", error);
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
export default interestsRequest;
