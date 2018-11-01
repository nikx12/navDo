import { createStore } from 'redux';
import reducers from '../reducers';

const store = createStore(reducers);
console.log("Store details", store)
export default store;