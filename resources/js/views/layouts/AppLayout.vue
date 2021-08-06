<template>
<div class="flex flex-col min-h-screen justify-between ">
  <app-header></app-header>
  <!-- <app-side-bar></app-side-bar> -->
    <slot class="flex flex-grow bg-blue-800"></slot>
  <app-footer></app-footer>
</div>
</template>

<script>
import AppHeader from '../../components/partials/AppHeader.vue';
import AppFooter from '../../components/partials/AppFooter.vue';
import AppSideBar from '../../components/partials/AppSideBar.vue';
export default {
    components: {
        AppHeader,
        AppFooter,
        AppSideBar
    },
}
</script>

<style>

</style>
