import { CartAction, SearchAction } from "redux/actions/types";

export const addProductToCart = (product: Product) => {
  return {
    type: CartAction.ADD_PRODUCT_TO_CART,
    payload: product,
  };
};

export const incrementCartQuantity = (productId: number) => {
  return {
    type: CartAction.INCREMENT_CART_ITEM_QUANTITY,
    payload: productId,
  };
};

export const decrementCartQuantity = (productId: number) => {
  return {
    type: CartAction.DECREMENT_CART_ITEM_QUANTITY,
    payload: productId,
  };
};

export const removeProductFromCart = (productId: number) => {
  return {
    type: CartAction.REMOVE_PRODUCT_FROM_CART,
    payload: productId,
  };
};

export const searchProduct = (search: string) => {
  return {
    type: SearchAction.SEARCH_PRODUCT,
    payload: search,
  };
};

export const countCartItems = (cart: IAppState["cart"]) => {
  return {
    type: CartAction.COUNT_ITEMS,
    payload: cart,
  };
};
