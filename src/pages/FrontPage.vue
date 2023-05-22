<template>
    <v-app>
        <v-row no-gutters>
            <v-col>
                <v-img class="mx-auto my-12" width="300" src="../assets/logo.png"></v-img>
            </v-col>
            <v-col class="right-side">                
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
export default{
    name: 'FrontPage',
};
</script>