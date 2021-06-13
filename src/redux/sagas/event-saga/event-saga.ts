import { takeLatest, put } from "redux-saga/effects";
import {
  ADDEVENT_REQUEST_REQUEST,
  ADDEVENT_REQUEST_SUCCESS,
  ADDEVENT_REQUEST_FAILURE,
  GETALLEVENTSBYINTEREST_REQUEST_REQUEST,
  GETALLEVENTSBYINTEREST_REQUEST_SUCCESS,
  GETALLEVENTSBYINTEREST_REQUEST_FAILURE,
  GETALLEVENTSBYFOLLOWEDORG_REQUEST_REQUEST,
  GETALLEVENTSBYFOLLOWEDORG_REQUEST_SUCCESS,
  GETALLEVENTSBYFOLLOWEDORG_REQUEST_FAILURE,
} from "../../actions/types";
import Api from "../../../services/apis/api";
import { endPoints } from "../../../services";

function* eventRequest() {
  yield takeLatest(ADDEVENT_REQUEST_REQUEST, _addEvent);
  yield takeLatest(
    GETALLEVENTSBYINTEREST_REQUEST_REQUEST,
    getAllEventsByInterests
  );
  yield takeLatest(
    GETALLEVENTSBYFOLLOWEDORG_REQUEST_REQUEST,
    getAllEventsByFollowedOrg
  );
}

function* _addEvent(params) {
  console.log("[add event saga]", params);
  try {
    let response = yield Api.postRequest(
      endPoints.addEvent,
      params.params,
      params.token
    );
    console.log("response - - - >>>> ", response);
    if (response) {
      yield put({
        type: ADDEVENT_REQUEST_SUCCESS,
        data: response.data.data.token,
      });
    } else {
      yield put({ type: ADDEVENT_REQUEST_FAILURE, data: response });
    }
  } catch (error) {
    console.log("error from login request saga -- > > >  > ", error);
  }
}
function* getAllEventsByInterests(params) {
  console.log("[add event saga]", params);
  try {
    let response = yield Api.axiosGet(
      endPoints.getEventsByInterest,
      params.token
    );
    console.log("response - - - >>>> ", response);
    if (response) {
      yield put({
        type: GETALLEVENTSBYINTEREST_REQUEST_SUCCESS,
        data: response.data.data.data,
      });
    } else {
      yield put({
        type: GETALLEVENTSBYINTEREST_REQUEST_FAILURE,
        data: response,
      });
    }
  } catch (error) {
    console.log("error from login request saga -- > > >  > ", error);
  }
}
function* getAllEventsByFollowedOrg(params) {
  console.log("[add event saga]", params);
  try {
    let response = yield Api.postRequest(
      endPoints.getEventsByFollowedOrg,
      {},
      params.token
    );
    console.log("response - - - >>>> ", response);
    if (response) {
      yield put({
        type: GETALLEVENTSBYFOLLOWEDORG_REQUEST_SUCCESS,
        data: response.data,
      });
    } else {
      yield put({
        type: GETALLEVENTSBYFOLLOWEDORG_REQUEST_FAILURE,
        data: response,
      });
    }
  } catch (error) {
    console.log("error from login request saga -- > > >  > ", error);
  }
}

export default eventRequest;
