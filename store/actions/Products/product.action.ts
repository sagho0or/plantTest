export const PRODUCTS_ITEMS_LOADING = 'PRODUCTS_ITEMS_LOADING';
export const PRODUCTS_ITEMS_FAILED = 'PRODUCTS_ITEMS_FAILED';
export const PRODUCTS_ITEMS_SUCCESS = 'PRODUCTS_ITEMS_SUCCESS';

export const productsItemsLoading = (data) => ({
    type: PRODUCTS_ITEMS_LOADING,
    data:data
});

export const productsItemsFailed = (error) => ({
    type: PRODUCTS_ITEMS_FAILED,
    error
});

export const productsItemsSuccess = (data) => ({
    type: PRODUCTS_ITEMS_SUCCESS,
    data
});