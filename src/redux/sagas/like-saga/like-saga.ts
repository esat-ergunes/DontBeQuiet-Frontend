import { takeLatest, put } from "redux-saga/effects";
import {
  GETALLLIKEDEVENTS_REQUEST_FAILURE,
  GETALLLIKEDEVENTS_REQUEST_REQUEST,
  GETALLLIKEDEVENTS_REQUEST_SUCCESS,
  GETALLPARTICIPATEDEVENTS_REQUEST_FAILURE,
  GETALLPARTICIPATEDEVENTS_REQUEST_REQUEST,
  GETALLPARTICIPATEDEVENTS_REQUEST_SUCCESS,
  LIKEEVENT_REQUEST_FAILURE,
  LIKEEVENT_REQUEST_REQUEST,
  LIKEEVENT_REQUEST_SUCCESS,
  PARTICIPATEEVENT_REQUEST_FAILURE,
  PARTICIPATEEVENT_REQUEST_REQUEST,
  PARTICIPATEEVENT_REQUEST_SUCCESS,
  UNLIKEEVENT_REQUEST_FAILURE,
  UNLIKEEVENT_REQUEST_REQUEST,
  UNLIKEEVENT_REQUEST_SUCCESS,
  UNPARTICIPATEEVENT_REQUEST_FAILURE,
  UNPARTICIPATEEVENT_REQUEST_REQUEST,
  UNPARTICIPATEEVENT_REQUEST_SUCCESS,
} from "../../actions/types";
import Api from "../../../services/apis/api";
import { endPoints } from "../../../services";
import { useDispatch, useSelector } from "react-redux";
import { getAlllikeAction, getAllParticipatedAction } from "redux/actions";

function* likeRequest() {
  yield takeLatest(LIKEEVENT_REQUEST_REQUEST, likeEvent);
  yield takeLatest(UNLIKEEVENT_REQUEST_REQUEST, unLikeEvent);
  yield takeLatest(PARTICIPATEEVENT_REQUEST_REQUEST, participateEvent);
  yield takeLatest(UNPARTICIPATEEVENT_REQUEST_REQUEST, unparticipateEvent);
  yield takeLatest(GETALLLIKEDEVENTS_REQUEST_REQUEST, allLikedEvent);
  yield takeLatest(
    GETALLPARTICIPATEDEVENTS_REQUEST_REQUEST,
    allParticipatedEvent
  );
}

function* likeEvent(params) {
  console.log("[likeEvent saga]", params);
  try {
    let response = yield Api.putRequest(
      endPoints.likeEvent,
      params.id,
      params.token
    );
    console.log("response - - - >>>> ", response);
    if (response) {
      yield put({
        type: LIKEEVENT_REQUEST_SUCCESS,
        data: response.data,
      });
      params.cbSuccess();
    } else {
      yield put({
        type: LIKEEVENT_REQUEST_FAILURE,
        data: response,
      });
    }
  } catch (error) {
    console.log("error from login request saga -- > > >  > ", error);
  }
}
function* unLikeEvent(params) {
  console.log("[unLikeEvent saga]", params);
  try {
    let response = yield Api.putRequest(
      endPoints.unLikeEvent,
      params.id,

      params.token
    );
    console.log("response - - - >>>> ", response);
    if (response) {
      yield put({
        type: UNLIKEEVENT_REQUEST_SUCCESS,
        data: response.data,
      });
      params.cbSuccess();
    } else {
      yield put({
        type: UNLIKEEVENT_REQUEST_FAILURE,
        data: response,
      });
    }
  } catch (error) {
    console.log("error from login request saga -- > > >  > ", error);
  }
}
function* participateEvent(params) {
  console.log("[participateEvent saga]", params);
  try {
    let response = yield Api.putRequest(
      endPoints.participateEvent,
      params.id,

      params.token
    );
    console.log("response - - - >>>> ", response);
    if (response) {
      yield put({
        type: PARTICIPATEEVENT_REQUEST_SUCCESS,
        data: response.data,
      });
      params.cbSuccess();
    } else {
      yield put({
        type: PARTICIPATEEVENT_REQUEST_FAILURE,
        data: response,
      });
    }
  } catch (error) {
    console.log("error from login request saga -- > > >  > ", error);
  }
}

function* unparticipateEvent(params) {
  console.log("[unparticipateEvent saga]", params);
  try {
    let response = yield Api.putRequest(
      endPoints.unParticipateEvent,
      params.id,
      params.token
    );
    console.log("response - - - >>>> ", response);
    if (response) {
      yield put({
        type: UNPARTICIPATEEVENT_REQUEST_SUCCESS,
        data: response.data,
      });
      params.cbSuccess();
    } else {
      yield put({
        type: UNPARTICIPATEEVENT_REQUEST_FAILURE,
        data: response,
      });
    }
  } catch (error) {
    console.log("error from login request saga -- > > >  > ", error);
  }
}

function* allLikedEvent(params) {
  console.log("[allLikedEvent saga]", params);
  try {
    let response = yield Api.axiosGet(
      endPoints.getAllLikedEvents,
      params.token
    );
    console.log("response - - - >>>> ", response);
    if (response) {
      yield put({
        type: GETALLLIKEDEVENTS_REQUEST_SUCCESS,
        data: response.data.data.data,
      });
    } else {
      yield put({
        type: GETALLLIKEDEVENTS_REQUEST_FAILURE,
        data: response,
      });
    }
  } catch (error) {
    console.log("error from login request saga -- > > >  > ", error);
  }
}

function* allParticipatedEvent(params) {
  console.log("[allParticipatedEvent saga]", params);
  try {
    let response = yield Api.axiosGet(
      endPoints.getAllParticipatedEvents,
      params.token
    );
    console.log("response - - - >>>> ", response);
    if (response) {
      yield put({
        type: GETALLPARTICIPATEDEVENTS_REQUEST_SUCCESS,
        data: response.data.data.data,
      });
    } else {
      yield put({
        type: GETALLPARTICIPATEDEVENTS_REQUEST_FAILURE,
        data: response,
      });
    }
  } catch (error) {
    console.log("error from login request saga -- > > >  > ", error);
  }
}

export default likeRequest;
