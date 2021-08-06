<template>
    <div class="bg-gray-200">
        <div class="grid min-h-screen place-items-center">
            <div class="w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-5/12  rounded-xl">
                <h1 class="text-xl font-semibold text-center">Welcome to ABC-CMS</h1>
                <!-- <flash-message></flash-message> -->
                <form class="mt-6" v-on:submit.prevent="registerUser">
                    <label for="name" class="block text-xs font-semibold text-gray-600 uppercase">name</label>
                    <input v-model="form.name" id="name" type="text" name="name" placeholder="John" autocomplete="given-name" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
                    <label for="email" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">E-mail</label>
                    <input v-model="form.email" id="email" type="email" name="email" placeholder="john.doe@company.com" autocomplete="email" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
                    <label for="password" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">Password</label>
                    <input v-model="form.password" id="password" type="password" name="password" placeholder="********" autocomplete="new-password" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
                    <label for="password-confirm" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">Confirm password</label>
                    <input v-model="form.passwordConfirm" id="password-confirm" type="password" name="password-confirm" placeholder="********" autocomplete="new-password" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
                    <button type="submit" class="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none">
                        Register
                    </button>
                    <p class="flex justify-between mt-4 text-xs text-gray-500 cursor-pointer hover:text-black">Already registered?</p>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
// import FlashMessage from '../../components/FlashMessage.vue'
import { getError } from "../../utils/helpers";
import AuthService from "../../services/AuthService";
export default {
    name: "RegisterForm",
    data() {
      return {
        form:{
            name: null,
            email: null,
            password: null,
            passwordConfirm: null,
            error: null,

        }
      }
    },
    components:{
       // FlashMessage
    },
    props: {

    },
    methods: {
        async registerUser() {
            console.log(this.form);
            console.log("Register user");
            this.errorMsg = '';

            this.error = null;
            const payload = {
                name: this.form.name,
                email: this.form.email,
                password: this.form.password,
                password_confirmation: this.form.password,
            };
            console.log(payload);
            AuthService.registerUser(payload)
                .then(() => this.$router.push("/dashboard"))
                .catch((error) => (this.error = getError(error)));
        },
    }
}
</script>

<style>

</style>
