import { CHECKOUT_BOOKING } from "../types";
import axios from "axios";

export const checkoutBooking = (payload) => (dispatch) => {
  dispatch({
    type: CHECKOUT_BOOKING,
    payload,
  });
};

export const checkout = (payload) => {
  axios.post(
    "https://backend-staycation-yayak.herokuapp.com/booking-page",
    payload,
    { headers: { contentType: "multipart/form-data" } }
  );
};
