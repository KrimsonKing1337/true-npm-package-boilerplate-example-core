import { createContext } from 'react';
import { createStoreHook, createDispatchHook, createSelectorHook } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { counterReducer, watchCounterActions } from './counter';
var sagaMiddleware = createSagaMiddleware();
var reducer = {
    counter: counterReducer,
};
var middleware = [
    sagaMiddleware,
];
export var store = configureStore({
    reducer: reducer,
    middleware: middleware,
});
sagaMiddleware.run(watchCounterActions);
export var storeContext = createContext({
    store: store,
    storeState: reducer,
});
export var useStore = createStoreHook(storeContext);
export var useDispatch = createDispatchHook(storeContext);
export var useSelector = createSelectorHook(storeContext);
//# sourceMappingURL=store.js.map