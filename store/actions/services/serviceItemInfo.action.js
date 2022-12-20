export const SERVICE_ITEM_INFO_LOADING = 'SERVICE_ITEM_INFO_LOADING';
export const SERVICE_ITEM_INFO_FAILED = 'SERVICE_ITEM_INFO_FAILED';
export const SERVICE_ITEM_INFO_SUCCESS = 'SERVICE_ITEM_INFO_SUCCESS';

export const serviceItemInfoLoading = (id) => ({
    type: SERVICE_ITEM_INFO_LOADING,
    id
});

export const serviceItemInfoFailed = (error) => ({
    type: SERVICE_ITEM_INFO_FAILED,
    error
});

export const serviceItemInfoSuccess = (data) => ({
    type: SERVICE_ITEM_INFO_SUCCESS,
    data
});

