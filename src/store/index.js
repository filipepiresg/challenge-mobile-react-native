import {persistStore} from 'redux-persist';

import createStore from './createStore';
import rootReducer from './modules/rootReducer';
import persistReducers from './persistReducer';

const middlewares = [];

const store = createStore(persistReducers(rootReducer), middlewares);
const persistor = persistStore(store);

export {store, persistor};
