import * as API from "./API";

export default {
    getCustomer(customerId) {
        return API.apiClient.get(`/customers/${customerId}`);
    },
    getCustomers(page) {
        return API.apiClient.get(`/customers/?page=${page}`);
    },
    paginateCustomers(link) {
        return API.apiClient.get(link);
    },
};
