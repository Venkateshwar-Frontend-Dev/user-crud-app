import { useReducer } from "react";
import axiosInstance from "../axiosInstance";
import { apiReducer, initialApiState } from "../apiReducer";

const useDeleteRequest = () => {
  const [state, dispatch] = useReducer(
    apiReducer,
    initialApiState
  );

  const deleteData = async (url) => {
    dispatch({ type: "REQUEST" });

    try {
      await axiosInstance.delete(url);

      const successMessage = "Deleted successfully";

      dispatch({
        type: "SUCCESS",
        payload: null,
        message: successMessage,
      });

      return {
        success: true,
        message: successMessage,
      };
    } catch (err) {
      const errorMessage =
        err.response?.data?.message ||
        err.message ||
        "Delete failed";

      dispatch({
        type: "ERROR",
        payload: errorMessage,
      });

      return {
        success: false,
        message: errorMessage,
      };
    }
  };

  return {
    deleteData,
    loading: state.loading,
    error: state.error,
    message: state.message,
  };
};

export default useDeleteRequest;
