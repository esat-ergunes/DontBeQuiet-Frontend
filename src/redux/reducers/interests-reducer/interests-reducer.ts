import * as TYPES from "../../actions/types";

const initialState = {
  loading: false,
  isLoggedIn: false,
  error: null,
  isSuccess: false,
  isFailure: false,
  interest_array: [],
  selected_array: [],
};
const interestReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case TYPES.INTEREST_REQUEST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case TYPES.INTEREST_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        error: actions.data,
        isLoggedIn: false,
        isSuccess: false,
        isFailure: true,
      };
    case TYPES.INTEREST_REQUEST_SUCCESS:
      const { params } = actions.data;

      if (params.length === undefined) {
        let arr = [...state.interest_array];
        const findIndex = arr.findIndex((x) => x._id === params.id);

        arr[findIndex] = { ...arr[findIndex] }; // Object.assign({}, arr[index])
        arr[findIndex]["active"] = true;

        return {
          ...state,
          interest_array: arr,
          selected_array: [...state.selected_array, params.id],
        };
      } else {
        return {
          ...state,
          loading: false,
          interest_array: actions.data.params,
          isLoggedIn: true,
          isSuccess: true,
          isFailure: false,
        };
      }
    case TYPES.UNINTEREST_REQUEST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case TYPES.UNINTEREST_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        error: actions.data,
        isLoggedIn: false,
        isSuccess: false,
        isFailure: true,
      };
    case TYPES.UNINTEREST_REQUEST_SUCCESS:
      const { obj } = actions.data;
      console.log("obj", obj);

      let arr = [...state.interest_array];
      const findIndex = arr.findIndex((x) => x._id === obj.id);

      arr[findIndex] = { ...arr[findIndex] }; // Object.assign({}, arr[index])
      arr[findIndex]["active"] = false;

      return {
        ...state,
        interest_array: arr,
        selected_array: state.selected_array.filter((item) => item !== obj.id),
      };

    default:
      return state;
  }
};
export default interestReducer;
