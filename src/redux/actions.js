import {
  FETCH_PRODUCTS_START,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAIL,
  SET_MODAL,
  HIDE_MODAL,
  SET_CHECKBOX_FILTER_CATEGORY,
  REMOVE_CHECKBOX_FILTER_CATEGORY,
  CHANGE_LIST_VIEW,
  SET_ALL_CATEGORIES,
  FETCH_PRODUCTS_FAIL_UPLOAD_FAKE_DATA,
} from './types';

import jsonData from '../responce.json';

import request from '../helpers/request';

const { data: fakeData } = jsonData;

export const fetchProductsStart = () => ({ type: FETCH_PRODUCTS_START });

export const fetchProductsSuccess = (data) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: data,
});

export const fetchProductsFail = (error) => ({
  type: FETCH_PRODUCTS_FAIL,
  payload: error,
});
export const fetchFailUploadFakeData = (data) => ({
  type: FETCH_PRODUCTS_FAIL_UPLOAD_FAKE_DATA,
  payload: data,
});

export const setCheckboxFilter = (category) => ({
  type: SET_CHECKBOX_FILTER_CATEGORY,
  payload: category,
});
export const setAllCategories = (category) => ({
  type: SET_ALL_CATEGORIES,
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

export const changeListView = (data) => ({
  type: CHANGE_LIST_VIEW,
  payload: data,
});

export const fetchProducts = (REQUEST_URL) => async (dispatch) => {
  dispatch(fetchProductsStart());

  try {
    const response = await request('GET', REQUEST_URL);
    if (!response.ok) throw new Error(response.statusText);
    const { data } = await response.json();
    dispatch(fetchProductsSuccess(data));
  } catch (error) {
    dispatch(fetchProductsFail(error.toString()));
    dispatch(fetchFailUploadFakeData(fakeData));
    console.error(error);
  }
};
