import {GET_PRODUCTS} from '../actions/types';

const INITIAL_STATE = {
  // Initial state list
  productList: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {...state, productList: action.payload};
    default:
      return state;
  }
};
