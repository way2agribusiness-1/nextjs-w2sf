import axios from 'axios';

export const getBrands = () => async (dispatch) => {
  try {
    const { data } = await axios.get('/api/v1/brands');
    dispatch({
      type: 'GET_BRANDS_SUCCESS',
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: 'GET_BRANDS_FAIL',
      payload: error,
    });
  }
};
export const getCredentials = () => async (dispatch) => {
  try {
    const { data } = await axios.get('/api/v1/credentials');
    dispatch({
      type: 'GET_CREDENTIALS_SUCCESS',
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: 'GET_CREDENTIALS_FAIL',
      payload: error,
    });
  }
};
