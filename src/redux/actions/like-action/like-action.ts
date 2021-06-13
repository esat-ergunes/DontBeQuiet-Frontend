import * as TYPES from "../types";

//Like Action
export const likeAction = (id, token, cbSuccess) => {
  return {
    type: TYPES.LIKEEVENT_REQUEST_REQUEST,
    id,
    token,
    cbSuccess,
  };
};

//Unlike Action
export const unlikeAction = (id, token, cbSuccess) => {
  return {
    type: TYPES.UNLIKEEVENT_REQUEST_REQUEST,
    id,
    token,
    cbSuccess,
  };
};

//Get All Like Action
export const getAlllikeAction = (token) => {
  return {
    type: TYPES.GETALLLIKEDEVENTS_REQUEST_REQUEST,
    token,
  };
};

//Participate Action
export const participateAction = (id, token, cbSuccess) => {
  return {
    type: TYPES.PARTICIPATEEVENT_REQUEST_REQUEST,
    id,
    token,
    cbSuccess,
  };
};

//UnParticipate Action
export const unParticipateAction = (id, token, cbSuccess) => {
  return {
    type: TYPES.UNPARTICIPATEEVENT_REQUEST_REQUEST,
    id,
    token,
    cbSuccess,
  };
};

//Get All Participated Action
export const getAllParticipatedAction = (token) => {
  return {
    type: TYPES.GETALLPARTICIPATEDEVENTS_REQUEST_REQUEST,
    token,
  };
};
