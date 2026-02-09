// src/api/useGetRequest.js
import { useEffect, useReducer } from "react";
import axiosInstance from "../axiosInstance";
import { apiReducer, initialApiState } from "../apiReducer";

const useGetRequest = (url, autoFetch = true) => {
  const [state, dispatch] = useReducer(apiReducer, initialApiState);

  const fetchData = async () => {
    if (!url) return;
    dispatch({ type: "REQUEST" });
    try {
      const res = await axiosInstance.get(url);
      dispatch({
        type: "SUCCESS",
        payload: res.data,
        message: "Fetched successfully",
      });
    } catch (err) {
      dispatch({
        type: "ERROR",
        payload:
          err.response?.data?.message || err.message || "Failed to fetch",
      });
    }
  };

  useEffect(() => {
    if (autoFetch) fetchData();
  }, []);

  return { ...state, refetch: fetchData };
};

export default useGetRequest;
