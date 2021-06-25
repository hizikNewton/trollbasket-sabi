import { Action, CartAction } from "redux/actions/types";
import { cart, products } from "../data/products";

const initialState = {
  products: products,
  cart: cart,
};

const storeReducer = (state = initialState, action: Action) => {
  let updatedCart;
  let updatedItemIndex;
  let qty;
  let totalItem;

  switch (action.type) {
    case CartAction.ADD_PRODUCT_TO_CART:
      updatedCart = [...state.cart];
      const payload = action.payload as Product;
      updatedItemIndex = updatedCart.findIndex(
        ({ product }) => product.id === payload.id
      );

      if (updatedItemIndex < 0) {
        updatedCart.push({
          product: { ...(action.payload as Product) },
          quantity: 1,
        });
      } else {
        const updatedItem = {
          ...updatedCart[updatedItemIndex],
        };

        updatedItem.quantity++;
        updatedCart[updatedItemIndex] = updatedItem;
      }

      return { ...state, cart: updatedCart };

    case CartAction.INCREMENT_CART_ITEM_QUANTITY:
      updatedCart = [...state.cart];
      updatedItemIndex = updatedCart.findIndex(
        ({ product }) => product.id === action.payload
      );
      const incrementedItem = {
        ...updatedCart[updatedItemIndex],
      };

      incrementedItem.quantity++;

      updatedCart[updatedItemIndex] = incrementedItem;

      return { ...state, cart: updatedCart };

    case CartAction.DECREMENT_CART_ITEM_QUANTITY:
      updatedCart = [...state.cart];
      updatedItemIndex = updatedCart.findIndex(
        ({ product }) => product.id === action.payload
      );

      const decrementedItem = {
        ...updatedCart[updatedItemIndex],
      };

      decrementedItem.quantity--;

      updatedCart[updatedItemIndex] = decrementedItem;

      return { ...state, cart: updatedCart };

    case CartAction.REMOVE_PRODUCT_FROM_CART:
      updatedCart = [...state.cart];
      updatedItemIndex = updatedCart.findIndex(
        ({ product }) => product.id === action.payload
      );

      updatedCart.splice(updatedItemIndex, 1);

      return { ...state, cart: updatedCart };

    case CartAction.COUNT_ITEMS:
      qty = [...(action.payload as IAppState["cart"])].map(
        ({ quantity }) => quantity
      );
      totalItem = qty.reduce((a, b) => a + b, 0) + 1;
      return { ...state, totalItem };

    default:
      return state;
  }
};

export default storeReducer;
