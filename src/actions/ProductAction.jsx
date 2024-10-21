import {api} from '../helper/apiConstant';
import {method} from '../helper/constants';
import {makeAPIRequest} from '../helper/globalFunction';
import {GET_PRODUCTS} from './types';

// Search book, author or year API
export const getProductDetails = request => async dispatch => {
  return makeAPIRequest({
    method: method.get,
    url: api.getProduct,
  })
    .then(response => {
      console.log('Response :--', response);
      dispatch({type: GET_PRODUCTS, payload: response?.data?.products});
      if (request.onSuccess) request.onSuccess(response?.data?.products);
    })
    .catch(err => {
      if (request.onFail) request.onFail(err);
      console.log('Error :-', err.response);
    });
};
