import {
    EDIT_PRODUCT_CONTENT_FAILED,
    EDIT_PRODUCT_CONTENT_LOADING,
    EDIT_PRODUCT_CONTENT_SUCCESS
} from "../../actions/Products/editProductContent.action";
import { HYDRATE } from 'next-redux-wrapper'

const initialState = {
    isLoading: false,
    isDone: false,
    hasError: '',
    response:'',
    id: '',
    isFave:''
};

const parentReducerName = 'products'; // same name  in reducers/index.ts
const reducerName = 'editProduct'; // same name  in reducers/index.ts

export default function reducer (state, action) {
    if (state === undefined) {
        return initialState
    }
    switch (action.type) {
        case HYDRATE: {
        }
            return {
                ...state,
                ...action.payload[parentReducerName][reducerName]
            }
        case EDIT_PRODUCT_CONTENT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isDone: true,
                hasError: '',
                response: action.data
            };
        case EDIT_PRODUCT_CONTENT_LOADING:
            return {
                ...state,
                isLoading: true,
                isDone: false,
                hasError: '',
                id:action.id,
                isFave:action.isFave
            };

        case EDIT_PRODUCT_CONTENT_FAILED:
            return {
                ...state,
                isLoading: false,
                isDone: false,
                hasError: action.error,
            };
        default:
            return state;
    }
}