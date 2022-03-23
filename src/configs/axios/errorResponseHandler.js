import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function errorResponseHandler(error) {
  if (error) {
    let errorMessage;
    if (error.response) {
      errorMessage = `${error.response.data.error.status} - ${error.response.data.error.message}`;
      toast(errorMessage);
      return Promise.reject(error);
    }
  }
}

export default errorResponseHandler;
