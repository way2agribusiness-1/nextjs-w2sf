

import {
  ADMIN_ORDERCALLBACK_FAIL,
  ADMIN_ORDERCALLBACK_REQUEST,
  ADMIN_ORDERCALLBACK_SUCCESS,
  ALL_ORDERCALLBACK_FAIL,
  ALL_ORDERCALLBACK_REQUEST,
  ALL_ORDERCALLBACK_SUCCESS,
  DELETE_ORDERCALLBACK_FAIL,
  DELETE_ORDERCALLBACK_REQUEST,
  DELETE_ORDERCALLBACK_RESET,
  DELETE_ORDERCALLBACK_SUCCESS,
  CLEAR_ERRORS,
  NEW_ORDERCALLBACK_FAIL,
  NEW_ORDERCALLBACK_REQUEST,
  NEW_ORDERCALLBACK_RESET,
  NEW_ORDERCALLBACK_SUCCESS,
} from "../constants/orderCallbackConstants";

export const orderCallbacksReducer = (
  state = { ordercallbacks: [] },
  { type, payload }
) => {
  switch (type) {
    case ALL_ORDERCALLBACK_REQUEST:
    case ADMIN_ORDERCALLBACK_REQUEST:
      return {
        loading: true,
        ordercallbacks: [],
      };
    case ALL_ORDERCALLBACK_SUCCESS:
      return {
        loading: false,
        ordercallbacks: payload.ordercallbacks,
      };
    case ADMIN_ORDERCALLBACK_SUCCESS:
      return {
        loading: false,
        ordercallbacks: payload,
      };

    case ALL_ORDERCALLBACK_FAIL:
    case ADMIN_ORDERCALLBACK_FAIL:
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

// New Order Callback Reducer
export const newOrderCallbackReducer = (
  state = { ordercallback: {} },
  { type, payload }
) => {
  switch (type) {
    case NEW_ORDERCALLBACK_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case NEW_ORDERCALLBACK_SUCCESS:
      return {
        loading: false,
        success: payload.success,
        callback: payload.ordercallback,
      };
    case NEW_ORDERCALLBACK_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case NEW_ORDERCALLBACK_RESET:
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

//DELETE ORDER CALLBACK
export const deleteOrderCallbackReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case DELETE_ORDERCALLBACK_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_ORDERCALLBACK_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: payload,
      };

    case DELETE_ORDERCALLBACK_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    case DELETE_ORDERCALLBACK_RESET:
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
