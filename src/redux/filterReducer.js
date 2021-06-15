import {
  SET_CHECKBOX_FILTER_CATEGORY,
  REMOVE_CHECKBOX_FILTER_CATEGORY,
} from './types';

const initialState = {
  filters: [],
  allCategories: [],
};

const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CHECKBOX_FILTER_CATEGORY:
      return {
        ...state,
        filters: [...state.categories, action.categories],
      };
    case 'SET_ALL_CATEGORIES':
      return {
        ...state,
        filters: [...state.categories, action.categories],
      };
    case REMOVE_CHECKBOX_FILTER_CATEGORY:
      return {
        ...state,
        filters: state.filters.filter(
          (categories) => categories !== action.categories
        ),
      };
    default:
      return state;
  }
};

export default filtersReducer;
