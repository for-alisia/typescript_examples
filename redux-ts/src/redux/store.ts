/** Dependencies */
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

/** Redux */
import reducers from './reducers';

const store = createStore(reducers, {}, applyMiddleware(thunk));

export default store;
