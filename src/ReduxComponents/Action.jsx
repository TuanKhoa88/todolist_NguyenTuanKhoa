import * as types from "./Constants";
export const addProduct = (product, quantity) => {
  return {
    type: types.ADD_PRODUCT,
    payload: { product, quantity },
  };
};
export const updateProduct = (productId, quantity) => {
  return {
    type: types.UPDATE_PRODUCT,
    payload: { productId, quantity },
  };
};
export const deleteProduct = (id) => {
  return {
    type: types.DELETE_PRODUCT,
    payload: id,
  };
};
