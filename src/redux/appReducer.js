import {
  FETCH_PRODUCTS_START,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAIL,
  CHANGE_LIST_VIEW,
  FETCH_PRODUCTS_FAIL_UPLOAD_FAKE_DATA,
} from './types';

const initialState = {
  products: [],
  isFetching: false,
  error: null,
  isGridView: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_START:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
        isFetching: false,
      };
    case FETCH_PRODUCTS_FAIL:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    case FETCH_PRODUCTS_FAIL_UPLOAD_FAKE_DATA:
      return {
        ...state,
        products: action.payload,
      };
    case CHANGE_LIST_VIEW:
      return {
        ...state,
        isGridView: action.payload,
      };

    default:
      return state;
  }
};

export default appReducer;
