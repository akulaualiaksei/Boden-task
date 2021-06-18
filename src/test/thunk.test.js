import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import * as actions from '../redux/actions';
import * as types from '../redux/types';
import REQUEST_URL from '../constant';
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
      { type: types.FETCH_PRODUCTS_START },
      {
        type: types.FETCH_PRODUCTS_SUCCESS,
        payload: ['test product 1', 'test product 2'],
      },
    ];

    const store = mockStore({ products: [] });

    return store.dispatch(actions.fetchProducts()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('create FETCH_PRODUCTS_FAIL when get response', () => {
    const originalFetch = global.fetch;
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: false,
        statusText: 'Server Error',
      })
    );

    const expectedActions = [
      { type: types.FETCH_PRODUCTS_START },
      {
        type: types.FETCH_PRODUCTS_FAIL,
        payload: 'Error: Internal Server Error',
      },
      {
        type: types.FETCH_PRODUCTS_FAIL_UPLOAD_FAKE_DATA,
        payload: fakeData,
      },
    ];

    const store = mockStore({ products: [] });

    global.fetch = originalFetch;

    return store.dispatch(actions.fetchProducts()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
