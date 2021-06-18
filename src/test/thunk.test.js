import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import * as actions from '../redux/actions';
import {
  FETCH_PRODUCTS_FAIL_UPLOAD_FAKE_DATA,
  FETCH_PRODUCTS_FAIL,
  FETCH_PRODUCTS_START,
  FETCH_PRODUCTS_SUCCESS,
} from '../redux/types';
import { REQUEST_URL } from '../constant';
import jsonData from '../response.json';

const { data: fakeData } = jsonData;

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('check thunk action', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('create FETCH_PRODUCTS_SUCCESS when get response', () => {
    fetchMock.getOnce(REQUEST_URL, {
      body: { data: ['test product 1', 'test product 2'] },
      headers: { 'content-type': 'application/json' },
    });

    const expectedActions = [
      { type: FETCH_PRODUCTS_START },
      {
        type: FETCH_PRODUCTS_SUCCESS,
        payload: ['test product 1', 'test product 2'],
      },
    ];

    const store = mockStore({ products: [] });

    return store.dispatch(actions.fetchProducts()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('create FETCH_PRODUCTS_FAIL when get response', () => {
    fetchMock.getOnce(REQUEST_URL, {
      throws: new Error('Internal Server Error'),
    });

    const expectedActions = [
      { type: FETCH_PRODUCTS_START },
      {
        type: FETCH_PRODUCTS_FAIL,
        payload: 'Error: Internal Server Error',
      },
      {
        type: FETCH_PRODUCTS_FAIL_UPLOAD_FAKE_DATA,
        payload: fakeData,
      },
    ];

    const store = mockStore({ products: [] });

    return store.dispatch(actions.fetchProducts()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
