import axios from 'axios';
import {
  ADD_TO_COMPARE,
  EMPTY_COMPARE,
  REMOVE_FROM_COMPARE,
} from '../constants/cartConstants';

// add to compare
export const addItemsToCompare =
  (slug, quantity = 1) =>
  async (dispatch, getState) => {
    const { data } = await axios.get(`/api/v1/product/${slug}`);

    dispatch({
      type: ADD_TO_COMPARE,
      payload: {
        product: data.product._id,
        name: data.product.name,
        seller: data.product.brand.name,
        price: data.product.price,
        cuttedPrice: data.product.cuttedPrice,
        image: data.product.images[0].url,
        stock: data.product.stock,
        hightlights: data.product.hightlights,
        specifications: data.product.specifications,
        category: data.category,
        ratings: data.ratings,
        quantity,
        slug,
      },
    });

    localStorage.setItem(
      'compareItems',
      JSON.stringify(getState().compare.compareItems)
    );
  };

// remove compare item
export const removeItemsFromCompare = (id) => async (dispatch, getState) => {
  dispatch({
    type: REMOVE_FROM_COMPARE,
    payload: id,
  });

  localStorage.setItem(
    'compareItems',
    JSON.stringify(getState().compare.compareItems)
  );
};

// empty compare
export const emptyCompare = () => async (dispatch, getState) => {
  dispatch({ type: EMPTY_COMPARE });

  localStorage.setItem(
    'compareItems',
    JSON.stringify(getState().compare.compareItems)
  );
};
