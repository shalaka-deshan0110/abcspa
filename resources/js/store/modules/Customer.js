import { getError } from "../../utils/helpers";
import CustomerService from "../../services/CustomerService";

export const namespaced = true;

export const state = {
    customer: null,
    customers: [],
    meta: null,
    links: null,
    loading: false,
    error: null,
};

export const mutations = {
    SET_CUSTOMER(state, customer) {
        state.customer = customer;
    },
    SET_CUSTOMERS(state, customers) {
        state.customers = customers;
    },
    SET_LOADING(state, loading) {
        state.loading = loading;
    },
    SET_MESSAGE(state, message) {
        state.message = message;
    },
    SET_ERROR(state, error) {
        state.error = error;
    },
};

export const actions = {
    getCustomer({ commit }, customerId) {
        commit("SET_LOADING", true);
        CustomerService.getCustomer(customerId)
            .then((response) => {
                commit("SET_CUSTOMER", response.data.data);
                commit("SET_LOADING", false);
            })
            .catch((error) => {
                commit("SET_LOADING", false);
                commit("SET_ERROR", getError(error));
            });
    },
    getCustomers({ commit }) {
        commit("SET_LOADING", true);
        CustomerService.getCustomers()
            .then((response) => {
                commit("SET_CUSTOMERS", response.data.data);
                commit("SET_LOADING", false);
            })
            .catch((error) => {
                commit("SET_LOADING", false);
                commit("SET_ERROR", getError(error));
            });
    },
};

export const getters = {
    customer: (state) => {
        return state.customer;
    },
    customers: (state) => {
        return state.customers;
    },
    loading: (state) => {
        return state.loading;
    },
    message: (state) => {
        return state.message;
    },
    error: (state) => {
        return state.error;
    },
};
