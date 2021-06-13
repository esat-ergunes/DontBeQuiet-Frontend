import * as TYPES from "../../actions/types";

const initialState = {
  loading: false,
  likedevent: "",
  all_likedevents: [],
  unLikedEvent: "",
  isLoggedIn: false,
  error: null,
  isSuccess: false,
  isFailure: false,
  participatedevent: "",
  all_participatedevents: [],
  unparticipatedevent: "",
};
const likeReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case TYPES.LIKEEVENT_REQUEST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case TYPES.LIKEEVENT_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        error: actions.data,
        isLoggedIn: false,
        isSuccess: false,
        isFailure: true,
      };
    case TYPES.LIKEEVENT_REQUEST_SUCCESS:
      // let a = Object.assign([], actions.data);
      // a.map((o) => (o.active = false));

      return {
        ...state,
        loading: false,
        likedevent: actions.data,
        isLoggedIn: true,
        isSuccess: true,
        isFailure: false,
      };
    case TYPES.UNLIKEEVENT_REQUEST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case TYPES.UNLIKEEVENT_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        error: actions.data,
        isLoggedIn: false,
        isSuccess: false,
        isFailure: true,
      };
    case TYPES.UNLIKEEVENT_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        unLikedEvent: actions.data,
        isLoggedIn: true,
        isSuccess: true,
        isFailure: false,
      };

    case TYPES.PARTICIPATEEVENT_REQUEST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case TYPES.PARTICIPATEEVENT_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        error: actions.data,
        isLoggedIn: false,
        isSuccess: false,
        isFailure: true,
      };
    case TYPES.PARTICIPATEEVENT_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        participatedevent: actions.data,
        isLoggedIn: true,
        isSuccess: true,
        isFailure: false,
      };
    case TYPES.UNPARTICIPATEEVENT_REQUEST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case TYPES.UNPARTICIPATEEVENT_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        error: actions.data,
        isLoggedIn: false,
        isSuccess: false,
        isFailure: true,
      };
    case TYPES.UNPARTICIPATEEVENT_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        unparticipatedevent: actions.data,
        isLoggedIn: true,
        isSuccess: true,
        isFailure: false,
      };
    case TYPES.GETALLLIKEDEVENTS_REQUEST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case TYPES.GETALLLIKEDEVENTS_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        error: actions.data,
        isLoggedIn: false,
        isSuccess: false,
        isFailure: true,
      };
    case TYPES.GETALLLIKEDEVENTS_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        all_likedevents: actions.data,
        isLoggedIn: true,
        isSuccess: true,
        isFailure: false,
      };
    case TYPES.GETALLPARTICIPATEDEVENTS_REQUEST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case TYPES.GETALLPARTICIPATEDEVENTS_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        error: actions.data,
        isLoggedIn: false,
        isSuccess: false,
        isFailure: true,
      };
    case TYPES.GETALLPARTICIPATEDEVENTS_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        all_participatedevents: actions.data,
        isLoggedIn: true,
        isSuccess: true,
        isFailure: false,
      };

    default:
      return state;
  }
};
export default likeReducer;
