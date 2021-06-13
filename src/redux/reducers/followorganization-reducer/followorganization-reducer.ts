import * as TYPES from "../../actions/types";

const initialState = {
  loading: false,
  allFollowed_organizations: [],
  followed_organization: "",
  isLoggedIn: false,
  error: null,
  isSuccess: false,
  isFailure: false,
  unfollowed_organization: "",
};
const followOrganizationReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case TYPES.GETFOLLOWEDORGANIZATION_REQUEST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case TYPES.GETFOLLOWEDORGANIZATION_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        error: actions.data,
        isLoggedIn: false,
        isSuccess: false,
        isFailure: true,
      };
    case TYPES.GETFOLLOWEDORGANIZATION_REQUEST_SUCCESS:
      // let a = Object.assign([], actions.data);
      // a.map((o) => (o.active = false));

      return {
        ...state,
        loading: false,
        allFollowed_organizations: actions.data,
        isLoggedIn: true,
        isSuccess: true,
        isFailure: false,
      };
    case TYPES.FOLLOWORGANIZATION_REQUEST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case TYPES.FOLLOWORGANIZATION_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        error: actions.data,
        isLoggedIn: false,
        isSuccess: false,
        isFailure: true,
      };
    case TYPES.FOLLOWORGANIZATION_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        followed_organization: actions.data,
        isLoggedIn: true,
        isSuccess: true,
        isFailure: false,
      };

    case TYPES.UNFOLLOWORGANIZATION_REQUEST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case TYPES.UNFOLLOWORGANIZATION_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        error: actions.data,
        isLoggedIn: false,
        isSuccess: false,
        isFailure: true,
      };
    case TYPES.UNFOLLOWORGANIZATION_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        unfollowed_organization: actions.data,
        isLoggedIn: true,
        isSuccess: true,
        isFailure: false,
      };

    default:
      return state;
  }
};
export default followOrganizationReducer;
