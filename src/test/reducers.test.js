import modalReducer from '../redux/modalReducer';
import appReducer from '../redux/appReducer';
import { AppReducerInitialState } from '../constant';
import {
  SET_MODAL,
  HIDE_MODAL,
  FETCH_PRODUCTS_START,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAIL,
  FETCH_PRODUCTS_FAIL_UPLOAD_FAKE_DATA,
} from '../redux/types';

describe('modal reducer', () => {
  it('should return the initial state', () => {
    expect(modalReducer(undefined, {})).toEqual({
      modal: null,
    });
  });

  it('should set modal', () => {
    expect(
      modalReducer(null, {
        type: SET_MODAL,
        payload: { title: 'test title', text: 'test text' },
      })
    ).toEqual({ modal: { title: 'test title', text: 'test text' } });
  });
  it('should set modal', () => {
    expect(
      modalReducer(
        { modal: { title: 'test title', text: 'test text' } },
        { type: HIDE_MODAL }
      )
    ).toEqual({ modal: null });
  });
});
describe('app reducer', () => {
  it('should return the initial state', () => {
    expect(appReducer(undefined, {})).toEqual(AppReducerInitialState);
  });

  it('should fetch start', () => {
    expect(
      appReducer(AppReducerInitialState, {
        type: FETCH_PRODUCTS_START,
      })
    ).toEqual({ ...AppReducerInitialState, isFetching: true });
  });
  it('should fetch success', () => {
    expect(
      appReducer(AppReducerInitialState, {
        type: FETCH_PRODUCTS_SUCCESS,
        payload: [1, 2, 3],
      })
    ).toEqual({
      ...AppReducerInitialState,
      isFetching: false,
      products: [1, 2, 3],
    });
  });
  it('should fetch fail', () => {
    expect(
      appReducer(AppReducerInitialState, {
        payload: 'some error',
        type: FETCH_PRODUCTS_FAIL,
      })
    ).toEqual({
      ...AppReducerInitialState,
      isFetching: false,
      error: 'some error',
    });
  });
  it('should add fake data after fail', () => {
    expect(
      appReducer(
        { ...AppReducerInitialState, error: 'some error' },
        {
          payload: [333, 222],
          type: FETCH_PRODUCTS_FAIL_UPLOAD_FAKE_DATA,
        }
      )
    ).toEqual({
      ...AppReducerInitialState,
      error: 'some error',
      products: [333, 222],
    });
  });
});
