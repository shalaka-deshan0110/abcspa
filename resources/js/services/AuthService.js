import axios from "axios";
import store from "../store";

export const authClient = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
    withCredentials: true, // required to handle the CSRF token
});

/*
 * Add a response interceptor
 */
authClient.interceptors.response.use(
    (response) => {
        return response;
    },
    function(error) {
        if (
            error.response && [401, 419].includes(error.response.status) &&
            store.getters["auth/authUser"] &&
            !store.getters["auth/guest"]
        ) {
            store.dispatch("auth/logout");
        }
        return Promise.reject(error);
    }
);


export default {

    async login(payload) {
        console.log(payload);
        await authClient.get("/sanctum/csrf-cookie");
        console.log(authClient.post("/login", payload));
        console.log("login end");
    },
    logout() {
        return authClient.post("/logout");
    },
    async forgotPassword(payload) {
        await authClient.get("/sanctum/csrf-cookie");
        return authClient.post("/forgot-password", payload);
    },
    getAuthUser() {
        return authClient.get("/api/users/auth");
    },
    async resetPassword(payload) {
        await authClient.get("/sanctum/csrf-cookie");
        return authClient.post("/reset-password", payload);
    },
    updatePassword(payload) {
        return authClient.put("/user/password", payload);
    },
    async registerUser(payload) {
        await authClient.get("/sanctum/csrf-cookie");
        console.log(payload, "registerUser");
        return authClient.post("/register", payload);
    },
    sendVerification(payload) {
        return authClient.post("/email/verification-notification", payload);
    },
    updateUser(payload) {
        return authClient.put("/user/profile-information", payload);
    },
};
