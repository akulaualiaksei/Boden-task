const REQUEST_URL =
  'https://fakerapi.it/api/v1/products?_quantity=10&_locale=en_US&_taxes=10&_categories_type=string';

const initialState = {
  modal: {
    modal: null,
  },
  products: {
    products: [],
    isFetching: false,
    error: null,
    isGridView: false,
  },
};

const dataFilterCategory = [
  {
    name: 'Смартфоны',
    count: 774,
  },
  {
    name: 'iPhone',
    count: 124,
  },
];

const dataBrandCategory = [
  {
    name: 'Samsung',
    count: 168,
  },
  {
    name: 'Apple',
    count: 124,
  },
  {
    name: 'Xiaomi',
    count: 102,
  },
  {
    name: 'Honor',
    count: 88,
  },
  {
    name: 'Huawei',
    count: 62,
  },
];

const AppReducerInitialState = {
  products: [],
  isFetching: false,
  error: null,
  isGridView: false,
};

export {
  REQUEST_URL,
  initialState,
  dataFilterCategory,
  dataBrandCategory,
  AppReducerInitialState,
};
