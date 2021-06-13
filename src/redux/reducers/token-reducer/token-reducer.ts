import * as TYPES from "../../actions/types";

const initialState = {
  loading: false,
  isLoggedIn: false,
  error: null,
  isSuccess: false,
  isFailure: false,
  token: "",
};
const tokenReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case TYPES.TOKEN_REQUEST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case TYPES.TOKEN_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        error: actions.data,
        isLoggedIn: false,
        isSuccess: false,
        isFailure: true,
      };
    case TYPES.TOKEN_REQUEST_SUCCESS:
      return {
        ...state,
        token: actions.data.params,
        isLoggedIn: false,
        isSuccess: false,
        isFailure: true,
      };

    default:
      return state;
  }
};
export default tokenReducer;
