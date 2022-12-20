import {applyMiddleware, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {createWrapper} from 'next-redux-wrapper';
import {createLogger} from "redux-logger";
import rootReducer from './reducers';

import getProductsSaga from './sagas/home/getProducts.saga';

// services page
import servicesItemsSaga from './sagas/services/services.saga';

//products
import productsItemsSaga from './sagas/products/products.saga';
import updateItemsSaga from './sagas/products/editProductContent.saga';


const bindMiddleware = (middleware) => {
    if (process.env.NODE_ENV === `development`) {
        const logger = createLogger();
        middleware.push(logger);
    }
    if (process.env.NODE_ENV !== 'production') {
        const {composeWithDevTools} = require('redux-devtools-extension')
        return composeWithDevTools(applyMiddleware(...middleware))
    }

    return applyMiddleware(...middleware)
}

export const makeStore = (context) => {
    const sagaMiddleware = createSagaMiddleware()
    const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

    store.api = {
        getProductsSaga : sagaMiddleware.run(getProductsSaga),
        servicesItemsSaga : sagaMiddleware.run(servicesItemsSaga),
        editProductContentSaga : sagaMiddleware.run(updateItemsSaga),
        updateProductsItemsSaga : sagaMiddleware.run(productsItemsSaga)
    }


    return store
}

export const wrapper = createWrapper(makeStore, {debug: true});