import {takeLatest, put, call, select} from 'redux-saga/effects';
import axios from 'axios';
import NotifierService from "../../../components/Common/Services/notifier";

import {
    EDIT_PRODUCT_CONTENT_LOADING,
    editProductContentFailed,
    editProductContentSuccess
} from "../../actions/Products/editProductContent.action";

const id = state =>state.products.editProduct.id;
const isFave = state =>state.products.editProduct.isFave;

function* ApiCall() {
    const idSelected = yield select(id);
    const isFaveSelected = yield select(isFave);
    try {
        const response = yield call(
            axios.post,
            `/api/products/productsList`,
            {idSelected, isFaveSelected},
            {
                timeout: Number(process.env.NEXT_PUBLIC_API_TIME_OUT),
            }
        );
        yield put(editProductContentSuccess(response.data))
    } catch (error) {

        if (error.response) {

            yield put(editProductContentFailed(error.response.data.message));

        } else {
            yield put(editProductContentFailed(error.message));

        }
    }
}

export default function* editProductContentCommentSaga() {
    yield takeLatest(EDIT_PRODUCT_CONTENT_LOADING, ApiCall)
}