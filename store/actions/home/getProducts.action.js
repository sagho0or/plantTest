export const GET_PRODUCTS_LOADING = 'GET_PRODUCTS_LOADING';
export const GET_PRODUCTS_FAILED = 'GET_PRODUCTS_FAILED';
export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS';

export const getProductsLoading = () => ({
    type: GET_PRODUCTS_LOADING
});

export const getProductsFailed = (error) => ({
    type: GET_PRODUCTS_FAILED,
    error
});

export const getProductsSuccess = (data) => ({
    type: GET_PRODUCTS_SUCCESS,
    data
});