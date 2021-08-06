<template>
<div class="bg-gray-200">
    <div class="grid min-h-screen place-items-center">
        <div class="w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-5/12 rounded-xl">
            <h1 class="text-xl font-semibold text-center">Welcome back, <span class="font-normal">sign in to continue</span></h1>
            <form v-on:submit.prevent="login" class="mt-6">

            <label for="email" class="block text-xs font-semibold text-gray-600 uppercase">E-mail</label>
            <input v-model="form.email" id="email" type="email" name="email" placeholder="john.doe@company.com" autocomplete="email" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
            <label for="password" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">Password</label>
            <input v-model="form.password" id="password" type="password" name="password" placeholder="********" autocomplete="current-password" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />

            <button type="submit" class="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none">
                Sign in
            </button>
            <p class="flex justify-between mt-4 text-xs text-gray-500 cursor-pointer hover:text-black">Forgot password?</p>
            </form>
        </div>
    </div>
</div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { getError } from "../../utils/helpers";
import AuthService from "../../services/AuthService";
export default {
    data() {
      return {
        form:{
            email: 'admin@abccms.com',
            password: '12345678',
            errorMsg: '',
            error: null,
            message: null,
        }
      }
    },
    components:{
       // FlashMessage
    },
    props: {
        // user: {
        // type: Object,
        // required: true,
        // },
    },
    methods: {
        // async login() {
        //     console.log(this.form);
        //     this.errorMsg = '';

        //     try {
        //         await this.$store.dispatch('Login', this.form);
        //         this.$router.push({name: 'dashboard'});
        //     } catch (e) {
        //         this.errorMsg = e;
        //     }
        // },
        login() {
            const payload = {
                email: this.form.email,
                password: this.form.password,
            };
            AuthService.login(payload)
                .then(() => this.$router.push("/dashboard"))
                .catch((error) => (this.error = getError(error)));
        },
        incremented() {
            this.$store.dispatch('increment');
            console.log(this.$store.state.count);
        }

    },
    computed: {
        ...mapState({
            count: state => state.count
        }),

    },
    mounted(){
            console.log(this.$store.state.count);
        }
}

</script>

<style>

</style>
