import * as TYPES from "../types";

//Get Followed Organizations Action
export const getFollowedOrganizations = (token) => {
  return {
    type: TYPES.GETFOLLOWEDORGANIZATION_REQUEST_REQUEST,
    token,
  };
};

//Follow Organization Action
export const followOrganization = (_id, token, cbSuccess) => {
  return {
    type: TYPES.FOLLOWORGANIZATION_REQUEST_REQUEST,
    _id,
    token,
    cbSuccess,
  };
};

//UNFollow Organization Action
export const UnfollowOrganization = (_id, token, cbSuccess) => {
  return {
    type: TYPES.UNFOLLOWORGANIZATION_REQUEST_REQUEST,
    _id,
    token,
    cbSuccess,
  };
};
