import { takeLatest, put } from "redux-saga/effects";
import {
  FOLLOWORGANIZATION_REQUEST_FAILURE,
  FOLLOWORGANIZATION_REQUEST_REQUEST,
  FOLLOWORGANIZATION_REQUEST_SUCCESS,
  GETFOLLOWEDORGANIZATION_REQUEST_FAILURE,
  GETFOLLOWEDORGANIZATION_REQUEST_REQUEST,
  GETFOLLOWEDORGANIZATION_REQUEST_SUCCESS,
  UNFOLLOWORGANIZATION_REQUEST_FAILURE,
  UNFOLLOWORGANIZATION_REQUEST_REQUEST,
  UNFOLLOWORGANIZATION_REQUEST_SUCCESS,
} from "../../actions/types";
import Api from "../../../services/apis/api";
import { endPoints } from "../../../services";
import { useDispatch, useSelector } from "react-redux";
import { getFollowedOrganizations } from "redux/actions";

function* followOrganizationRequest() {
  yield takeLatest(GETFOLLOWEDORGANIZATION_REQUEST_REQUEST, getFollowedOrg);

  yield takeLatest(FOLLOWORGANIZATION_REQUEST_REQUEST, followOrganization);
  yield takeLatest(UNFOLLOWORGANIZATION_REQUEST_REQUEST, unfollowOrganization);

  // yield takeLatest(LOGOUT_REQUEST_REQUEST, logout);
  // yield takeLatest(FORGOTPASSWORD_REQUEST_REQUEST, forgotPassword);
  // yield takeLatest(VERIFYOTP_REQUEST_REQUEST, verifyOtp);
  // yield takeLatest(CHANGEPASSWORD_REQUEST_REQUEST, changePassword);
}

function* getFollowedOrg(params) {
  console.log("[getFollowedOrg saga]", params);
  try {
    let response = yield Api.axiosGet(
      endPoints.getFollowedOrganizations,
      params.token
    );
    console.log("response - - - >>>> ", response);
    if (response) {
      yield put({
        type: GETFOLLOWEDORGANIZATION_REQUEST_SUCCESS,
        data: response.data.data.data,
      });
    } else {
      yield put({
        type: GETFOLLOWEDORGANIZATION_REQUEST_FAILURE,
        data: response,
      });
    }
  } catch (error) {
    console.log("error from login request saga -- > > >  > ", error);
  }
}
function* followOrganization(params) {
  console.log("[followOrg saga]", params);
  try {
    let response = yield Api.putRequest(
      endPoints.followOrganization,
      params._id,
      params.token
    );
    console.log("response - - - >>>> ", response);
    if (response) {
      yield put({
        type: FOLLOWORGANIZATION_REQUEST_SUCCESS,
        data: response.data,
      });
      params.cbSuccess();
    } else {
      yield put({
        type: FOLLOWORGANIZATION_REQUEST_FAILURE,
        data: response,
      });
    }
  } catch (error) {
    console.log("error from login request saga -- > > >  > ", error);
  }
}
function* unfollowOrganization(params) {
  console.log("[followOrg saga]", params);
  try {
    let response = yield Api.putRequest(
      endPoints.unfollowOrganization,
      params._id,
      params.token
    );
    console.log("response - - - >>>> ", response);
    if (response) {
      yield put({
        type: UNFOLLOWORGANIZATION_REQUEST_SUCCESS,
        data: response.data,
      });
      params.cbSuccess();
    } else {
      yield put({
        type: UNFOLLOWORGANIZATION_REQUEST_FAILURE,
        data: response,
      });
    }
  } catch (error) {
    console.log("error from login request saga -- > > >  > ", error);
  }
}

export default followOrganizationRequest;
