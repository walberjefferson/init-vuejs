<template>
    <v-app>
        <v-navigation-drawer app class="app-drawer"
                             dark>
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title class="title">
                        Application
                    </v-list-item-title>
                    <v-list-item-subtitle>
                        subtext
                    </v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>
            <v-list dense nav class="app-drawer">
                <template v-for="item in items">
                    <v-list-item :to="item.link" :key="item.title" link>
                        <v-list-item-action class="app-drawer-title">
                            <v-icon class="app-drawer-title">{{ item.icon }}</v-icon>
                        </v-list-item-action>

                        <v-list-item-content>
                            <v-list-item-title class="app-drawer-title">
                                {{ item.title }}
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </template>
            </v-list>
        </v-navigation-drawer>

        <v-system-bar>
            <!-- -->
        </v-system-bar>

        <v-app-bar app>
            <!-- -->
        </v-app-bar>

        <!-- Sizes your content based upon application components -->
        <v-content>

            <!-- Provides the application the proper gutter -->
            <v-container fluid>
                <!-- If using vue-router -->
                <router-view></router-view>
            </v-container>
        </v-content>

        <v-footer app>
            <!-- -->
        </v-footer>
    </v-app>
</template>

<script>
export default {
    name: 'app',
    data() {
        return {
            themeColors: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'],
            items: [
                {title: 'Dashboard', icon: 'mdi-view-dashboard', link: '/'},
                {title: 'Users', icon: 'mdi-account-multiple', link: '/'},
                {title: 'About', icon: 'mdi-help-box', link: '/about'},
            ],
            right: null,
        }
    }
}
</script>


<style lang="scss">
    @import './assets/styles/variables';
    @import './assets/styles/bootstrap';

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
</style>
