import { createStore } from 'redux';
import combineReducers from './reducers/combinedReducer';

const store = createStore(combineReducers);
console.log("Store details", store)
export default store;