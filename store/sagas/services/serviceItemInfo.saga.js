import {takeLatest, put, call, select} from 'redux-saga/effects';
import axios from 'axios';
import {
    SERVICE_ITEM_INFO_LOADING,
    serviceItemInfoFailed,
    serviceItemInfoSuccess
} from "../../actions/services/serviceItemInfo.action";

const id = state => state.services.info.id;

function* ApiCall() {
    const idSelected = select(id);
    try {
        const response = yield call(
            axios.get,
            `${process.env.HOST}/api/services/serviceItemInfo/${idSelected}`,
            {
                timeout: Number(process.env.API_TIME_OUT),
            }
            
        );
        yield put(serviceItemInfoSuccess(response.data))
    } catch (error) {

        if (error.response) {

            yield put(serviceItemInfoFailed(error.response.data.message));

        } else {
            yield put(serviceItemInfoFailed(error.message));

        }
    }
}

export default function* serviceItemInfo() {
    yield takeLatest(SERVICE_ITEM_INFO_LOADING, ApiCall)
}