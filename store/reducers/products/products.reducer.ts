import {
    PRODUCTS_ITEMS_FAILED,
    PRODUCTS_ITEMS_LOADING,
    PRODUCTS_ITEMS_SUCCESS
} from "../../actions/Products/product.action";
import { HYDRATE } from 'next-redux-wrapper'

const initialState = {
    isLoading: false,
    isDone: false,
    hasError: '',
    response:'',
};

const parentReducerName = 'products'; // same name  in reducers/index.ts
const reducerName = 'items'; // same name  in reducers/index.ts

export default function reducer (state, action) {
    if (state === undefined) {
        return initialState
    }
    switch (action.type) {
        case HYDRATE: {
            return {
                ...state,
                ...action.payload[parentReducerName][reducerName]
            }
        }
        case PRODUCTS_ITEMS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isDone: true,
                hasError: '',
                response: action.data
            };
        case PRODUCTS_ITEMS_LOADING:
            return {
                ...state,
                isLoading: true,
                isDone: false,
                hasError: '',
            };

        case PRODUCTS_ITEMS_FAILED:
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