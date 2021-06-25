import { SearchAction } from "redux/actions/types";
import { products } from "redux/data/products";

const initialState = {
  products: products,
  locationFilter: {},
  searchResult: {},
};

type Action = {
  type: SearchAction;
  payload: string;
};

const searchReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case SearchAction.FILTER_LOCATION:
      if (action.payload === "All") {
        return state;
      } else {
        const locationFilter = state.products.filter(
          (product) => action.payload === product.location
        );

        const res = { ...state, locationFilter };
        return res;
      }

    case SearchAction.SEARCH_PRODUCT:
      const searchResult = state.products.filter(({ name, desc }) => {
        return name.includes(action.payload) || desc.includes(action.payload);
      });
      return { ...state, searchResult };

    default:
      return state;
  }
};

export default searchReducer;
