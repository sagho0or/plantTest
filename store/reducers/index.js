import {combineReducers} from "redux";
import getProduct from "./home/getProducts.reducer";
import servicesItem from './services/service.reducer';
import editProduct from './products/editProductContent.';
import serviceItemInfo from './services/serviceItemInfo.reducer';
import productsItem from './products/products.reducer';

export default combineReducers({
    home: combineReducers({
        getProduct
    }),
    services: combineReducers({
        items: servicesItem,
        info: serviceItemInfo,
    }),
    products: combineReducers({
        items: productsItem,
        editProduct: editProduct,
    })
});

