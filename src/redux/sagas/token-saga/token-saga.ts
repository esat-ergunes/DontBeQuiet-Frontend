import { takeLatest, put } from "redux-saga/effects";
import {
  TOKEN_REQUEST_REQUEST,
  TOKEN_REQUEST_SUCCESS,
  TOKEN_REQUEST_FAILURE,
} from "../../actions/types";

function* tokenRequest() {
  yield takeLatest(TOKEN_REQUEST_REQUEST, tokens);
}

function* tokens(params) {
  console.log("[interest saga]", params);
  try {
    yield put({ type: TOKEN_REQUEST_SUCCESS, data: params });
  } catch (error) {
    yield put({ type: TOKEN_REQUEST_FAILURE, data: error });

    console.log("error from interest request saga -- > > >  > ", error);
  }
}

export default tokenRequest;
