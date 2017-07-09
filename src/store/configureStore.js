import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga';
//import Sagas from '../sagas';
import reducers from 'reducers';
const isDevelopment = process.env.NODE_ENV === 'development';
const composeEnhancers = isDevelopment ? (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose) : compose;

const configureStore = (initialState) => {
     const sagaMiddleware = createSagaMiddleware();
    const store = createStore(reducers, initialState, composeEnhancers(
        applyMiddleware(sagaMiddleware)
    ));
     //sagaMiddleware.run(Sagas);
    if(module.hot) {
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers').default;
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
}

export default configureStore;