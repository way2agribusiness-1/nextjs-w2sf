import {
  ADMIN_CALLBACK_FAIL,
  ADMIN_CALLBACK_REQUEST,
  ADMIN_CALLBACK_SUCCESS,
  ALL_CALLBACK_FAIL,
  ALL_CALLBACK_REQUEST,
  ALL_CALLBACK_SUCCESS,
  CLEAR_ERRORS,
  DELETE_CALLBACK_FAIL,
  DELETE_CALLBACK_REQUEST,
  DELETE_CALLBACK_RESET,
  DELETE_CALLBACK_SUCCESS,
  NEW_CALLBACK_FAIL,
  NEW_CALLBACK_REQUEST,
  NEW_CALLBACK_RESET,
  NEW_CALLBACK_SUCCESS,
} from "../constants/callbackContants";

export const callbacksReducer = (
  state = { callbacks: [] },
  { type, payload }
) => {
  switch (type) {
    case ALL_CALLBACK_REQUEST:
    case ADMIN_CALLBACK_REQUEST:
      return {
        loading: true,
        callbacks: [],
      };
    case ALL_CALLBACK_SUCCESS:
      return {
        loading: false,
        callbacks: payload.callbacks,
      };
    case ADMIN_CALLBACK_SUCCESS:
      return {
        loading: false,
        callbacks: payload,
      };

    case ALL_CALLBACK_FAIL:
    case ADMIN_CALLBACK_FAIL:
      return {
        loading: false,
        error: payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

// New Callback Reducer
export const newCallbackReducer = (
  state = { callback: {} },
  { type, payload }
) => {
  switch (type) {
    case NEW_CALLBACK_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case NEW_CALLBACK_SUCCESS:
      return {
        loading: false,
        success: payload.success,
        callback: payload.callback,
      };
    case NEW_CALLBACK_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case NEW_CALLBACK_RESET:
      return {
        ...state,
        success: false,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

//DELETE CALLBACK
export const deleteCallbackReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case DELETE_CALLBACK_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_CALLBACK_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: payload,
      };

    case DELETE_CALLBACK_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    case DELETE_CALLBACK_RESET:
      return {
        ...state,
        isDeleted: false,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
