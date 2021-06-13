import * as TYPES from "../../actions/types";

const initialState = {
  loading: false,
  add_event: "",
  isLoggedIn: false,
  error: null,
  isSuccess: false,
  isFailure: false,
  interests_events: [],
  alleventsbyfollowed_organizations: [],
};
const eventReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case TYPES.ADDEVENT_REQUEST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case TYPES.ADDEVENT_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        error: actions.data,
        isLoggedIn: false,
        isSuccess: false,
        isFailure: true,
      };
    case TYPES.ADDEVENT_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        add_event: actions.data,
        isLoggedIn: true,
        isSuccess: true,
        isFailure: false,
      };
    case TYPES.GETALLEVENTSBYINTEREST_REQUEST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case TYPES.GETALLEVENTSBYINTEREST_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        error: actions.data,
        isLoggedIn: false,
        isSuccess: false,
        isFailure: true,
      };
    case TYPES.GETALLEVENTSBYINTEREST_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        interests_events: actions.data,
        isLoggedIn: true,
        isSuccess: true,
        isFailure: false,
      };

    case TYPES.GETALLEVENTSBYFOLLOWEDORG_REQUEST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case TYPES.GETALLEVENTSBYFOLLOWEDORG_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        error: actions.data,
        isLoggedIn: false,
        isSuccess: false,
        isFailure: true,
      };
    case TYPES.GETALLEVENTSBYFOLLOWEDORG_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        alleventsbyfollowed_organizations: actions.data.doc,
        isLoggedIn: true,
        isSuccess: true,
        isFailure: false,
      };

    default:
      return state;
  }
};
export default eventReducer;
