import {
  FETCH_PRODUCTS_START,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAIL,
} from './types';

import request from '../helpers/request';

export const fetchProductsStart = () => ({ type: FETCH_PRODUCTS_START });
export const fetchProductsSuccess = (data) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: data,
});
export const fetchProductsFail = (error) => ({
  type: FETCH_PRODUCTS_FAIL,
  payload: error,
});

export const fetchProducts = (REQUEST_URL) => async (dispatch) => {
  dispatch(fetchProductsStart());

  try {
    const response = await request('GET', REQUEST_URL);
    const { data } = await response.json();
    dispatch(fetchProductsSuccess(data));
  } catch (error) {
    dispatch(fetchProductsFail(error));
  }
};
