import {
    GET_PRODUCTS_FAILED,
    GET_PRODUCTS_LOADING,
    GET_PRODUCTS_SUCCESS
} from "../../actions/home/getProducts.action";
import {HYDRATE} from 'next-redux-wrapper'

const initialState = {
    isLoading: false,
    isDone: false,
    hasError: '',
    response: '',
};
const parentReducerName = 'home'; // same name  in reducers/index.ts
const reducerName = 'getProduct'; // same name  in reducers/index.ts

export default function getProductsReducer (state, action) {
    if (state === undefined) {
        return initialState
    }
    switch (action.type) {
        case HYDRATE: {
            return {...state,
                ...action.payload[parentReducerName][reducerName]}
        }
        case GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isDone: true,
                hasError: '',
                response: action.data
            };
        case GET_PRODUCTS_LOADING:
            return {
                ...state,
                isLoading: true,
                isDone: false,
                hasError: '',
            };

        case GET_PRODUCTS_FAILED:
            return {
                ...state,
                isLoading: false,
                isDone: false,
                hasError: action.error || null,
            };
        default:
            return state;
    }
}