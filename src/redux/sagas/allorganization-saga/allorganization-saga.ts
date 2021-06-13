import { takeLatest, put } from "redux-saga/effects";
import {
  GETALLEVENTSBYSPECIFICORG_REQUEST_FAILURE,
  GETALLEVENTSBYSPECIFICORG_REQUEST_REQUEST,
  GETALLEVENTSBYSPECIFICORG_REQUEST_SUCCESS,
  GETALLORGANIZATION_REQUEST_FAILURE,
  GETALLORGANIZATION_REQUEST_REQUEST,
  GETALLORGANIZATION_REQUEST_SUCCESS,
} from "../../actions/types";
import Api from "../../../services/apis/api";
import { endPoints } from "../../../services";

function* allOrganizationRequest() {
  yield takeLatest(GETALLORGANIZATION_REQUEST_REQUEST, allOrganizations);
  yield takeLatest(
    GETALLEVENTSBYSPECIFICORG_REQUEST_REQUEST,
    getAlleventsBySpecificOrg
  );
}

function* allOrganizations(params) {
  console.log("[getAllOrg saga]", params);
  try {
    let response = yield Api.postRequest(
      endPoints.getAllOrganizations,
      null,
      params.token
    );
    console.log("response - - - >>>> ", response);
    if (response) {
      yield put({
        type: GETALLORGANIZATION_REQUEST_SUCCESS,
        data: response.data.doc,
      });
    } else {
      yield put({
        type: GETALLORGANIZATION_REQUEST_FAILURE,
        data: response,
      });
    }
  } catch (error) {
    console.log("error from login request saga -- > > >  > ", error);
  }
}

function* getAlleventsBySpecificOrg(params) {
  console.log("[getAlleventsBySpecificOrg saga]", params);
  try {
    let response = yield Api.getAxiosReq(
      endPoints.getAllEventsBySpecificOrgs,
      params.id,
      params.token
    );
    console.log("response - - - >>>> ", response);
    if (response) {
      yield put({
        type: GETALLEVENTSBYSPECIFICORG_REQUEST_SUCCESS,
        data: response.data.data.data,
      });
    } else {
      yield put({
        type: GETALLEVENTSBYSPECIFICORG_REQUEST_FAILURE,
        data: response,
      });
    }
  } catch (error) {
    console.log("error from login request saga -- > > >  > ", error);
  }
}

export default allOrganizationRequest;
