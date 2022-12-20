import {takeLatest, put, call, select} from 'redux-saga/effects';
import axios from 'axios';
import {
    PRODUCTS_ITEMS_LOADING,
    productsItemsFailed,
    productsItemsSuccess
} from "../../actions/Products/product.action";

function* ApiCall(action) {
    try {
        const response = yield call(
            axios.get,
            `/api/products/productsList/?limit=${action?.data?.data?.limit}&offset=${action?.data?.data?.offset}`,
            {
                timeout: Number(process.env.API_TIME_OUT),
            }
        );
        yield put(productsItemsSuccess(response.data))
    } catch (error) {

        if (error.response) {

            yield put(productsItemsFailed(error.response.data.message));

        } else {
            yield put(productsItemsFailed(error.message));

        }
    }
}

export default function* productsItems() {
    yield takeLatest(PRODUCTS_ITEMS_LOADING, ApiCall)
}