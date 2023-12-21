import axios from 'axios';

export const getSeo = () => async (dispatch) => {
  try {
    const { data } = await axios.get('http://127.0.0.1:4000/api/v1/getSeo');
    dispatch({
      type: 'GET_SEO_SUCCESS',
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: 'GET_SEO_FAIL',
      payload: error,
    });
  }
};
