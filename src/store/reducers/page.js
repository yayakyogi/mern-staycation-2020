import { FETCH_ERROR_PAGE, FETCH_PAGE } from "../types";

const initialState = {};

const page = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PAGE:
      return {
        ...state,
        ...action.payload,
      };

    case FETCH_ERROR_PAGE:
      return {
        error: action.error,
      };

    default:
      return state;
  }
};

export default page;
