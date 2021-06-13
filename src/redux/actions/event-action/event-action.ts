import * as TYPES from "../types";

//add event action
export const addEventRequest = (params, token) => {
  return {
    type: TYPES.ADDEVENT_REQUEST_REQUEST,
    params,
    token,
  };
};

//get all events by interests action
export const getAlleventsByInterestRequest = (token) => {
  return {
    type: TYPES.GETALLEVENTSBYINTEREST_REQUEST_REQUEST,
    token,
  };
};

//get all events by followed organizations
export const getAlleventsByFollowedOrg = (token) => {
  return {
    type: TYPES.GETALLEVENTSBYFOLLOWEDORG_REQUEST_REQUEST,
    token,
  };
};
