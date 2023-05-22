<template>
    <v-app>
        <v-navigation-drawer app v-model="drawer">
            <v-list-item color="#0B1320">
                <v-list-item-content>
                    <v-list-item-title class="text-h6">
                        <v-img width="40" src="../assets/logo.png"></v-img>
                    </v-list-item-title>
                    <!-- <v-list-item-subtitle>
                        subtext
                    </v-list-item-subtitle> -->
                </v-list-item-content>
            </v-list-item>
            <!-- <v-divider></v-divider> -->
            <v-list dense nav>
                <v-list-item-group v-model="model" active-class="active">
                    <v-list-item link to="/dashboard">
                        <v-list-item-icon>
                            <v-icon color="#0B1320">mdi-view-dashboard</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title>Dashboard</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item link class="py-1" to="/report">
                        <v-list-item-icon>
                            <v-icon color="#0B1320">mdi-account-check</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title>Report Presence</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item link class="py-1" to="/performance">
                        <v-list-item-icon>
                            <v-icon color="#0B1320">mdi-chart-box</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title>Performance</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item link class="py-1" to="/payroll">
                        <v-list-item-icon>
                            <v-icon color="#0B1320">mdi-wallet</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title>Payroll</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar app dark color="#45AF5B" elevation="1">
            <!-- -->
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-menu offset-y>
                <template v-slot:activator="{on, attrs}">
                    <v-btn class="ml-auto px-0" text v-bind="attrs" v-on="on">
                        <v-avatar color="yellow" size="36">
                            <span class="black--text text-body-2">A</span>
                        </v-avatar>
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item>
                        <v-list-item-icon class="mr-3">
                            <v-icon color="#0B1320">mdi-account</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title class="text-body-2">Account</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item link :to="'/'">
                        <v-list-item-icon class="mr-3">
                            <v-icon color="#0B1320">mdi-logout</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title class="text-body-2">Logout</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-app-bar>

        <!-- Sizes your content based upon application components -->
        <v-main style="background-color: #F6FFF8;">

            <!-- Provides the application the proper gutter -->
            <v-container fluid>

            <!-- If using vue-router -->
            <div class="ma-6">
                <router-view></router-view>
            </div>
            </v-container>
        </v-main>
    </v-app>
</template>
<style lang="scss">
.active{background-color: #f6fff8;}
.v-navigation-drawer .v-navigation-drawer__border {
  display: none
}
.row .col.col-3 {
    border-right: 1px solid #e5e5e5
}
.row .col.col-3:last-child{
    border-right: 0;
}
</style>
<script>

export default{
    name: 'PageDashboard',
    data() {
        return {
            drawer: null,
            model: 0,
        }
    }
}
</script>