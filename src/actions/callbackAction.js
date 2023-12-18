//New Crop --Admin

import axios from "axios";

import {
  ALL_CALLBACK_REQUEST,
  ALL_CALLBACK_FAIL,
  ALL_CALLBACK_SUCCESS,

  NEW_CALLBACK_FAIL,
  NEW_CALLBACK_REQUEST,

  NEW_CALLBACK_SUCCESS,
  DELETE_CALLBACK_REQUEST,
  DELETE_CALLBACK_SUCCESS,
  DELETE_CALLBACK_FAIL,
  ADMIN_CALLBACK_REQUEST,
  ADMIN_CALLBACK_SUCCESS,
  ADMIN_CALLBACK_FAIL,
} from "../constants/callbackContants";

// Get All Callbacks --- Filter/Search/Sort
export const getCallbacks =
  (keyword = "", category, price = [0, 300000], ratings = 0, currentPage = 1) =>
  async (dispatch) => {
    try {
      dispatch({ type: ALL_CALLBACK_REQUEST });

      let url = `/api/v1/callbacks?keyword=${keyword}&price[gte]=${price[0]}&price[lte]=${price[1]}&ratings[gte]=${ratings}&page=${currentPage}`;

      const { data } = await axios.get(url);

      dispatch({
        type: ALL_CALLBACK_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ALL_CALLBACK_FAIL,
        payload: error.response.data.message,
      });
    }
  };

//NEW CALLBACK
export const createCallback = (callbackData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_CALLBACK_REQUEST });
    const config = { header: { "Content-Type": "application/json" } };
    const { data } = await axios.post(
      "/api/v1/admin/callback/new",
      callbackData,
      config
    );

    dispatch({
      type: NEW_CALLBACK_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NEW_CALLBACK_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Delete Callback ---ADMIN
export const deleteCallback = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_CALLBACK_REQUEST });
    const { data } = await axios.delete(`/api/v1/admin/callback/${id}`);
    

    dispatch({
      type: DELETE_CALLBACK_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: DELETE_CALLBACK_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get All Callbacks ---ADMIN
export const getAdminCallbacks = () => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_CALLBACK_REQUEST });

    const { data } = await axios.get("/api/v1/admin/callbacks");

    dispatch({
      type: ADMIN_CALLBACK_SUCCESS,
      payload: data.callbacks,
    });
  } catch (error) {
    dispatch({
      type: ADMIN_CALLBACK_FAIL,
      payload: error.response.data.message,
    });
  }
};
