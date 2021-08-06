import Vue from "vue";
import store from "../store/index";
import { createRouter, createWebHistory } from "vue-router";
import auth from "../middleware/auth";

const routes = [{
        path: "/",
        name: "home",
        component: () =>
            import ( /* webpackChunkName: "home" */ "../views/Home"),
    },
    {
        path: "/dashboard",
        name: "dashboard",
        meta: { requiresAuth: true },
        component: () =>
            import ( /* webpackChunkName: "dashboard" */ "../views/Dashboard.vue"),
    },
    {
        path: "/user",
        name: "user",
        meta: { requiresAuth: true },
        component: () =>
            import ( /* webpackChunkName: "user" */ "../views/users/User"),
    },
    {
        path: "/users",
        name: "users",
        meta: { requiresAuth: true },
        component: () =>
            import ( /* webpackChunkName: "users" */ "../views/users/Users"),
        beforeEnter: (to, from, next) => {
            if (store.getters["auth/isAdmin"]) next();
            else next(false);
        },
    },
    {
        path: "/login",
        name: "login",
        component: () =>
            import ( /* webpackChunkName: "login" */ "../views/auth/Login"),
    },
    {
        path: "/register",
        name: "register",
        component: () =>
            import ( /* webpackChunkName: "register" */ "../views/auth/Register"),
    },
    {
        path: "/reset-password",
        name: "ResetPassword",
        meta: { middleware: [auth] },
        component: () =>
            import ( /* webpackChunkName: "reset-password" */ "../views/ResetPassword"),
    },
    {
        path: "/forgot-password",
        name: "ForgotPassword",
        component: () =>
            import (
                /* webpackChunkName: "forgot-password" */
                "../views/ForgotPassword"
            ),
    },
    {
        path: "/customer",
        name: "customer",
        meta: { requiresAuth: true },
        component: () =>
            import ( /* webpackChunkName: "customer" */ "../views/customers/Customer"),
    },
    {
        path: "/customers",
        name: "customers",
        meta: { requiresAuth: true },
        component: () =>
            import ( /* webpackChunkName: "customer" */ "../views/customers/Customers"),
        beforeEnter: (to, from, next) => {
            if (store.getters["auth/isAdmin"]) next();
            else next(false);
        },
    },

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

router.beforeEach((to, from, next) => {
    const authUser = store.getters["auth/authUser"];
    const reqAuth = to.matched.some((record) => record.meta.requiresAuth);
    const loginQuery = { path: "/login", query: { redirect: to.fullPath } };

    if (reqAuth && !authUser) {
        store.dispatch("auth/getAuthUser").then(() => {
            if (!store.getters["auth/authUser"]) next(loginQuery);
            else next();
        });
    } else {
        next(); // make sure to always call next()!
    }
});

export default router