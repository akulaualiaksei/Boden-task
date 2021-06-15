import { SET_MODAL, HIDE_MODAL } from './types';

const initialState = {
  modal: null,
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MODAL:
      return {
        ...state,
        modal: action.payload,
      };
    case HIDE_MODAL:
      return {
        ...state,
        modal: null,
      };

    default:
      return state;
  }
};

export default modalReducer;
