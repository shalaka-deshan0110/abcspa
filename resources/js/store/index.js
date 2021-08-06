import { createApp } from 'vue'
import { createStore, createLogger } from 'vuex'

import * as auth from "./modules/Auth";
import * as user from "./modules/User";

const debug = process.env.NODE_ENV !== 'production'

const store = createStore({

    strict: true,

    modules: {
        auth,
        user,
    },

    strict: debug,
    plugins: debug ? [createLogger()] : []
})

export default store;