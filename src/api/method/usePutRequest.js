import { useReducer } from "react";
import axiosInstance from "../axiosInstance";
import { apiReducer, initialApiState } from "../apiReducer";

const usePutRequest = () => {
  const [state, dispatch] = useReducer(apiReducer, initialApiState);

  const putData = async (url, payload) => {
    dispatch({ type: "REQUEST" });

    try {
      const res = await axiosInstance.put(url, payload);

      const successMessage = "Updated successfully";

      dispatch({
        type: "SUCCESS",
        payload: res.data,
        message: successMessage,
      });

      return {
        success: true,
        message: successMessage,
        data: res.data,
      };
    } catch (err) {
      const errorMessage =
        err.response?.data?.message || err.message || "Update failed";

      dispatch({
        type: "ERROR",
        payload: errorMessage,
      });

      return {
        success: false,
        message: errorMessage,
        data: null,
      };
    }
  };

  return {
    putData,
    loading: state.loading,
    error: state.error,
    message: state.message,
  };
};

export default usePutRequest;
