export const getAllProducts = (state) => state.products.products;
export const getModal = (state) => state.modal.modal;

export const getAllCategories = (state) => {
  const { products } = state.products.products;

  if (!products) return [];
  const newArray = [...new Set(products.map((item) => item.categories).flat())];
  return newArray;
};

export const getFilteredProducts = (state) => {
  const {
    products: { products },
    filters,
  } = state;
  console.log(products, filters);
  return null;
};

export const getFilterCategories = (state) => state.filters.categories;
