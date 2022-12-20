export const SERVICES_ITEMS_LOADING = 'SERVICES_ITEMS_LOADING';
export const SERVICES_ITEMS_FAILED = 'SERVICES_ITEMS_FAILED';
export const SERVICES_ITEMS_SUCCESS = 'SERVICES_ITEMS_SUCCESS';

export const servicesItemsLoading = () => ({
    type: SERVICES_ITEMS_LOADING
});

export const servicesItemsFailed = (error) => ({
    type: SERVICES_ITEMS_FAILED,
    error
});

export const servicesItemsSuccess = (data) => ({
    type: SERVICES_ITEMS_SUCCESS,
    data
});