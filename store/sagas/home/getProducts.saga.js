import { takeLatest, put, call, select } from 'redux-saga/effects';
import axios from 'axios';
import {
    GET_PRODUCTS_LOADING,
    getProductsFailed,
    getProductsSuccess
} from "../../actions/home/getProducts.action";

function* ApiCall() {
    try {
        const response = yield call(
            axios.get,
            `${process.env.HOST}/api/productsInfo`,
            {
                timeout: Number(process.env.API_TIME_OUT),
            }
        );
        yield put(getProductsSuccess(response.data))
    } catch (error) {

        if (error.response) {

            yield put(getProductsFailed(error.response.data.message));

        } else {
            yield put(getProductsFailed(error.message));

        }
    }
}

export default function* getProducts() {
    yield takeLatest(GET_PRODUCTS_LOADING, ApiCall)
}