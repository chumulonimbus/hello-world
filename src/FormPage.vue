<template>
    <v-app>
        <v-row no-gutters>
            <v-col>
                <v-img class="mx-auto my-12" width="300" src="./assets/logo.png"></v-img>
            </v-col>
            <v-col class="right-side">
                <!-- <FormLogin/> -->
                <!-- <component :is="currentView" /> -->
                
    <router-view/>
            </v-col>
        </v-row>
    </v-app>
</template>
<style>
.right-side{
    background: linear-gradient(45deg, #45AF5B, #19CC3E);
}
</style>
<script>
// import FormLogin from './components/FormLogin.vue';
// import FormRegist from './components/FormRegist.vue';
// import FormForgotPass from './components/FormForgotPass.vue';
// const routes = {
//   '/': FormLogin,
//   '/regist': FormRegist,
//   '/forgot': FormForgotPass
// }
export default{
    name: 'FormPage',
    components: {
        // FormLogin,
        // FormRegist,
        // FormForgotPass
    },
    // data() {
    //     return {
    //     currentPath: window.location.hash
    //     }
    // },
    // computed: {
    //     currentView() {
    //     return routes[this.currentPath.slice(1) || '/'] || FormForgotPass
    //     }
    // },
    // mounted() {
    //     window.addEventListener('hashchange', () => {
    //         this.currentPath = window.location.hash
    //     })
    // }
};
</script>