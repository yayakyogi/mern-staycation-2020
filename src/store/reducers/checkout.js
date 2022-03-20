import { CHECKOUT_BOOKING } from "../types";

const inisitalState = null;

const checkout = (state = inisitalState, action) => {
  switch (action.type) {
    case CHECKOUT_BOOKING:
      return action.payload;
    default:
      return state;
  }
};

export default checkout;
