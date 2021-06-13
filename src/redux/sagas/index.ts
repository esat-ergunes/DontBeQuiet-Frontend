import { fork } from "redux-saga/effects";
import allOrganizationRequest from "./allorganization-saga/allorganization-saga";

import loginRequest from "./auth-saga/login-saga";
import eventRequest from "./event-saga/event-saga";
import followOrganizationRequest from "./followorganization-saga/followorganization-saga";
import interestsRequest from "./interests-saga/interests-saga";
import likeRequest from "./like-saga/like-saga";
import tokenRequest from "./token-saga/token-saga";

export default function* rootSaga() {
  yield fork(loginRequest);
  yield fork(interestsRequest);
  yield fork(followOrganizationRequest);
  yield fork(allOrganizationRequest);
  yield fork(eventRequest);
  yield fork(tokenRequest);
  yield fork(likeRequest);
}
