import { FETCH_PAGE, FETCH_ERROR_PAGE } from "../types";
import axios from "axios";
import { Redirect } from "react-router-dom";

export const fetchPage = (url, page) => (dispatch) => {
  return axios
    .get(url)
    .then((response) => {
      dispatch({
        type: FETCH_PAGE,
        payload: {
          [page]: response.data,
        },
      });
      return response.data;
    })
    .catch((error) => {
      dispatch({
        type: FETCH_ERROR_PAGE,
        error: {
          message: error.message,
        },
      });
      return <Redirect from="/properties/:id" to="/" />;
    });
};
