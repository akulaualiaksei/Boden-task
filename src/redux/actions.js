import {
  FETCH_PRODUCTS_START,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAIL,
  SET_MODAL,
  HIDE_MODAL,
  CHANGE_LIST_VIEW,
  FETCH_PRODUCTS_FAIL_UPLOAD_FAKE_DATA,
} from './types';

import REQUEST_URL from '../constant';

import jsonData from '../response.json';

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

export const fetchProducts = () => async (dispatch) => {
  dispatch(fetchProductsStart());

  try {
    const response = await request('GET', REQUEST_URL);
    const { data } = response;
    return dispatch(fetchProductsSuccess(data));
  } catch (error) {
    dispatch(fetchProductsFail(error.toString()));
    return dispatch(fetchFailUploadFakeData(fakeData));
    // console.error(error);
  }
};
