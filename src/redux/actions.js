import {
  FETCH_PRODUCTS_START,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAIL,
  SET_MODAL,
  HIDE_MODAL,
  SET_CHECKBOX_FILTER_CATEGORY,
  REMOVE_CHECKBOX_FILTER_CATEGORY,
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

export const setCheckboxFilter = (category) => ({
  type: SET_CHECKBOX_FILTER_CATEGORY,
  payload: category,
});
export const setAllCategories = (category) => ({
  type: 'SET_ALL_CATEGORIES',
  payload: category,
});

export const removeCheckboxFilter = (category) => ({
  type: REMOVE_CHECKBOX_FILTER_CATEGORY,
  payload: category,
});

export const setModal = (modal) => ({
  type: SET_MODAL,
  payload: modal,
});
export const hideModal = () => ({
  type: HIDE_MODAL,
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
