<template>
    <div class="font-sans antialiased">
    <nav class="flex items-center justify-between flex-wrap bg-indigo-900 p-6">
        <div class="flex items-center flex-no-shrink text-white ml-0 sm:ml-8 mr-0 sm:mr-8">
        <span class="font-semibold text-xl tracking-tight">ABC</span>
        </div>
        <div class="block sm:hidden">
        <button @click="toggle" class="flex items-center px-3 py-2 border rounded text-purple-200 border-purple-200 hover:text-white hover:border-white">
            <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
        </div>
        <div :class="open ? 'block': 'hidden'" class="w-full flex-grow sm:flex sm:items-center sm:w-auto">
        <div class="text-sm sm:flex-grow">
            <router-link to="/" class="no-underline block mt-4 sm:inline-block sm:mt-0 text-white hover:text-purple-200 mr-4">
            Dashboard
            </router-link>
            <router-link to="/customer" class="no-underline block mt-4 sm:inline-block sm:mt-0 text-white hover:text-purple-200 mr-4">
            Customer
            </router-link>
            <router-link to="/about" class="no-underline block mt-4 sm:inline-block sm:mt-0 text-white hover:text-purple-200 mr-4">
            About
            </router-link>
            <router-link to="/login" class="no-underline block mt-4 sm:inline-block sm:mt-0 text-white hover:text-purple-200 mr-4">
            Login
            </router-link>
            <router-link to="/register" class="no-underline block mt-4 sm:inline-block sm:mt-0 text-white hover:text-purple-200 mr-4">
            Register
            </router-link>
        </div>
        <div>
            <router-link to="#" class="no-underline inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-purple-900 hover:drop-shadow-lg hover:bg-white mt-4 sm:mt-0">Download</router-link>
        </div>
        </div>
    </nav>
    <app-side-bar></app-side-bar>
    </div>
</template>

<script>
export default {
    data()  {
        return {
            open: false,
        }
    },
    methods: {
        toggle() {
            this.open = !this.open
        }
    }
}
</script>

<style>

</style>
