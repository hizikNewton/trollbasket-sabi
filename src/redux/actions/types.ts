export type Action = {
  type: CartAction;
  payload:
    | Product
    | number
    | {
        product: Product;
        quantity: number;
      }[];
};

export enum CartAction {
  ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART",
  INCREMENT_CART_ITEM_QUANTITY = "INCREMENT_CART_ITEM_QUANTITY",
  DECREMENT_CART_ITEM_QUANTITY = "DECREMENT_CART_ITEM_QUANTITY",
  REMOVE_PRODUCT_FROM_CART = "REMOVE_PRODUCT_FROM_CART",
  COUNT_ITEMS = "COUNT_ITEMS",
}

export enum SearchAction {
  SEARCH_PRODUCT = "SEARCH_PRODUCT",
  FILTER_LOCATION = "FILTER_LOCATION",
}
