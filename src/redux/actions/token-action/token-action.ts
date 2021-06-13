import * as TYPES from "../types";

//Token Action
export const tokenAction = (params) => {
  return {
    type: TYPES.TOKEN_REQUEST_REQUEST,
    params,
  };
};
