import * as TYPES from "../types";

//Get Followed Organizations Action
export const getAllOrganizations = (token) => {
  return {
    type: TYPES.GETALLORGANIZATION_REQUEST_REQUEST,
    token,
  };
};

//Get Specific Organization Events Action
export const getAllSpecificOrganizations = (id, token) => {
  return {
    type: TYPES.GETALLEVENTSBYSPECIFICORG_REQUEST_REQUEST,
    id,
    token,
  };
};
