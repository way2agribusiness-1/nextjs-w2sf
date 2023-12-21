//New Crop --Admin

import axios from 'axios';
import {
  ADMIN_ORDERCALLBACK_FAIL,
  ADMIN_ORDERCALLBACK_REQUEST,
  ADMIN_ORDERCALLBACK_SUCCESS,
  ALL_ORDERCALLBACK_FAIL,
  ALL_ORDERCALLBACK_REQUEST,
  ALL_ORDERCALLBACK_SUCCESS,
  DELETE_ORDERCALLBACK_FAIL,
  DELETE_ORDERCALLBACK_REQUEST,
  DELETE_ORDERCALLBACK_SUCCESS,
  NEW_ORDERCALLBACK_FAIL,
  NEW_ORDERCALLBACK_REQUEST,
  NEW_ORDERCALLBACK_SUCCESS,
} from '../constants/orderCallbackConstants';

// Get All ORDER Callbacks
export const getOrderCallbacks = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_ORDERCALLBACK_REQUEST });

    let url = `/api/v1/ordercallbacks`;

    const { data } = await axios.get(url);

    dispatch({
      type: ALL_ORDERCALLBACK_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALL_ORDERCALLBACK_FAIL,
      payload: error.response.data.message,
    });
  }
};

//NEW ORDER CALLBACK
export const createOrderCallback = (ordercallbackData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_ORDERCALLBACK_REQUEST });
    const config = { header: { 'Content-Type': 'application/json' } };
    const { data } = await axios.post(
      'http://127.0.0.1:4000/api/v1/ordercallback/new',
      ordercallbackData,
      config
    );

    dispatch({
      type: NEW_ORDERCALLBACK_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NEW_ORDERCALLBACK_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Delete Order Callback
export const deleteOrderCallback = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_ORDERCALLBACK_REQUEST });
    const { data } = await axios.delete(`http://127.0.0.1:4000/api/v1/admin/ordercallback/${id}`);

    dispatch({
      type: DELETE_ORDERCALLBACK_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: DELETE_ORDERCALLBACK_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get All OrderCallbacks
export const getAdminOrderCallbacks = () => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_ORDERCALLBACK_REQUEST });

    const { data } = await axios.get('http://127.0.0.1:4000/api/v1/admin/ordercallbacks');

    dispatch({
      type: ADMIN_ORDERCALLBACK_SUCCESS,
      payload: data.ordercallbacks,
    });
  } catch (error) {
    dispatch({
      type: ADMIN_ORDERCALLBACK_FAIL,
      payload: error.response.data.message,
    });
  }
};
