import {
    SERVICE_ITEM_INFO_FAILED,
    SERVICE_ITEM_INFO_LOADING,
    SERVICE_ITEM_INFO_SUCCESS
} from "../../actions/services/serviceItemInfo.action";
import { HYDRATE } from 'next-redux-wrapper'

const initialState = {
    isLoading: false,
    isDone: false,
    hasError: '',
    response:'',
    id:''
};

const parentReducerName = 'services'; // same name  in reducers/index.ts
const reducerName = 'info'; // same name  in reducers/index.ts

export default function serviceItemInfoReducer (state, action) {
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
        case SERVICE_ITEM_INFO_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isDone: true,
                hasError: '',
                response: action.data
            };
        case SERVICE_ITEM_INFO_LOADING:
            return {
                ...state,
                isLoading: true,
                isDone: false,
                hasError: '',
                id: action.id
            };

        case SERVICE_ITEM_INFO_FAILED:
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