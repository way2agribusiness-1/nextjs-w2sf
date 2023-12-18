import axios from 'axios';
import {
  NEW_KNOWLEDGE_SUCCESS,
  NEW_KNOWLEDGE_REQUEST,
  NEW_KNOWLEDGE_FAIL,
  CLEAR_ERRORS,
  ALL_KNOWLEDGES_FAIL,
  ALL_KNOWLEDGES_SUCCESS,
  ALL_KNOWLEDGES_REQUEST
} from '../constants/knowledgeConstants';

export const getAllKnowledge = (
  keyword = '',
  category,
  subCategory,
  price = [0, 300000],
  ratings = 0,
  currentPage = 1
) => async (dispatch) => {
  try {
    dispatch({ type: ALL_KNOWLEDGES_REQUEST });

    let url = `/api/v1/knowledge?keyword=${keyword}&price[gte]=${price[0]}&price[lte]=${price[1]}&ratings[gte]=${ratings}&page=${currentPage}`;
    if (category) {
      url = `/api/v1/knowledge?keyword=${keyword}&category=${category}&price[gte]=${price[0]}&price[lte]=${price[1]}&ratings[gte]=${ratings}&page=${currentPage}`;
    }
    if (subCategory) {
      url = `/api/v1/knowledge?keyword=${keyword}&subCategory=${subCategory}&price[gte]=${price[0]}&price[lte]=${price[1]}&ratings[gte]=${ratings}&page=${currentPage}`;
    }

    const { data } = await axios.get(url);

    dispatch({
      type: ALL_KNOWLEDGES_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: ALL_KNOWLEDGES_FAIL,
      payload: error.response.data.message
    });
  }
};

export const createKnowledge = (knowledgeData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_KNOWLEDGE_REQUEST });

    const config = { header: { "Content-Type": "application/json" } };
    const { data } = await axios.post(
      "/api/v1/admin/knowledge/new",
      knowledgeData,
      config
    );

    dispatch({
      type: NEW_KNOWLEDGE_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: NEW_KNOWLEDGE_FAIL,
      payload: error.response.data.message
    });
  }
};

export const clearErrors = () => (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
