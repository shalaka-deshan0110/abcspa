<template>
  <div>
      <app-layout>
        <h1 class="text-3xl text-blue-800 flex justify-center items-center">{{ greeting }}</h1>

      </app-layout>
  </div>
</template>

<script>
import AppLayout from './layouts/AppLayout.vue';
export default {
    components: {
        AppLayout
    },
    setup: () => ({
        greeting: 'Hello World from Vue 3!'
    }),
    methods: {
        increment() {
            this.$store.commit('increment')
            console.log(this.$store.state.count)
        }
    }
}
</script>
