export const getAllProducts = (state) => state.products.products;

export const getModal = (state) => state.modal.modal;

export const getSwitcherValue = (state) => state.products.isGridView;

export const getAllCategories = (state) => {
  const { products } = state.products.products;

  if (!products) return [];
  const newArray = [...new Set(products.map((item) => item.categories).flat())];
  return newArray;
};

export const getFilterCategories = (state) => state.filters.categories;
