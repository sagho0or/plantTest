import {takeLatest, put, call, select} from 'redux-saga/effects';
import axios from 'axios';
import {
    SERVICES_ITEMS_LOADING,
    servicesItemsFailed,
    servicesItemsSuccess
} from "../../actions/services/services.action";

function* ApiCall() {
    try {
        const response = yield call(
            axios.get,
            `${process.env.HOST}/api/products/productsList/`,
            {
                timeout: Number(process.env.API_TIME_OUT),
            }
        );
        var data = response.data.filter(function (el) {
            return el.isFave ;
          })
        yield put(servicesItemsSuccess(data))
    } catch (error) {

        if (error.response) {

            yield put(servicesItemsFailed(error.response.data.message));

        } else {
            yield put(servicesItemsFailed(error.message));

        }
    }
}

export default function* servicesItems() {
    yield takeLatest(SERVICES_ITEMS_LOADING, ApiCall)
}