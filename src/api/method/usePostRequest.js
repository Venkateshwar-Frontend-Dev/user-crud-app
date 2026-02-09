import { useReducer } from "react";
import axiosInstance from "../axiosInstance";
import { apiReducer, initialApiState } from "../apiReducer";

const usePostRequest = () => {
  const [state, dispatch] = useReducer(apiReducer, initialApiState);

  const postData = async (url, payload) => {
    dispatch({ type: "REQUEST" });

    try {
      const res = await axiosInstance.post(url, payload);

      const successMessage = "User created successfully";

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
        err.response?.data?.message || err.message || "Create failed";

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
    postData,
    loading: state.loading,
    error: state.error,
    message: state.message,
  };
};

export default usePostRequest;
