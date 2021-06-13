import * as TYPES from "../../actions/types";

const initialState = {
  loading: false,
  all_organizations: [],
  isLoggedIn: false,
  error: null,
  isSuccess: false,
  isFailure: false,
  events_byOrganization: [],
};
const allOrganizationReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case TYPES.GETALLORGANIZATION_REQUEST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case TYPES.GETALLORGANIZATION_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        error: actions.data,
        isLoggedIn: false,
        isSuccess: false,
        isFailure: true,
      };
    case TYPES.GETALLORGANIZATION_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        all_organizations: actions.data,
        isLoggedIn: true,
        isSuccess: true,
        isFailure: false,
      };
    case TYPES.GETALLEVENTSBYSPECIFICORG_REQUEST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case TYPES.GETALLEVENTSBYSPECIFICORG_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        error: actions.data,
        isLoggedIn: false,
        isSuccess: false,
        isFailure: true,
      };
    case TYPES.GETALLEVENTSBYSPECIFICORG_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        events_byOrganization: actions.data,
        isLoggedIn: true,
        isSuccess: true,
        isFailure: false,
      };

    default:
      return state;
  }
};
export default allOrganizationReducer;
