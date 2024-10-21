import {combineReducers} from 'redux';
import productReducer from './productReducer';

const rootReducer = combineReducers({
  // Reducer list
  product: productReducer,
});

export default rootReducer;
