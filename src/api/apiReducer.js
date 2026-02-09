export const initialApiState = {
  data: null,
  loading: false,
  error: null,
  message: null,
  status: false,
};

export const apiReducer = (state, action) => {
  switch (action.type) {
    case "REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
        message: null,
        status: false,
      };

    case "SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
        message: action.message || "Success",
        status: true,
      };

    case "ERROR":
      return {
        ...state,
        loading: false,
        error: action.payload,
        message: "Error",
        status: false,
      };

    default:
      return state;
  }
};
