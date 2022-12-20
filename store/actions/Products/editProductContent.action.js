export const EDIT_PRODUCT_CONTENT_LOADING = 'EDIT_PRODUCT_CONTENT_LOADING';
export const EDIT_PRODUCT_CONTENT_FAILED = 'EDIT_PRODUCT_CONTENT_FAILED';
export const EDIT_PRODUCT_CONTENT_SUCCESS = 'EDIT_PRODUCT_CONTENT_SUCCESS';

export const editProductContentLoading = (id,isFave) => ({
    type: EDIT_PRODUCT_CONTENT_LOADING,
    id,
    isFave
});

export const editProductContentFailed = (error) => ({
    type: EDIT_PRODUCT_CONTENT_FAILED,
    error
});

export const editProductContentSuccess = (data) => ({
    type: EDIT_PRODUCT_CONTENT_SUCCESS,
    data
});