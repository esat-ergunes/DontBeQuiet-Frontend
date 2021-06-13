import * as TYPES from "../types";

//Interests Action
export const interestRequest = (params) => {
  return {
    type: TYPES.INTEREST_REQUEST_REQUEST,
    params,
  };
};

//UNInterests Action
export const unInterestRequest = (obj) => {
  return {
    type: TYPES.UNINTEREST_REQUEST_REQUEST,
    obj,
  };
};
