<template>
    <div>
        <v-row>
            <v-col cols="4" class="mb-4" v-for="user in users" :key="user.id">
                <v-card>
                    <v-list-item three-line>
                        <v-list-item-content>
                            <v-list-item-title class="headline mb-1">{{ user.name }}</v-list-item-title>
                            <v-list-item-subtitle>{{ user.email.toLocaleLowerCase() }}</v-list-item-subtitle>
                        </v-list-item-content>
                        <v-btn elevation="0" fab dark small tag="div" :color="checkColor(user.active)">
                            <v-icon>{{ user.active === 'true' ? 'mdi-check' : 'mdi-close' }}</v-icon>
                        </v-btn>
                    </v-list-item>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import {mapActions, mapState} from 'vuex';

export default {
    name: "Users",
    data() {
        return {
            error: null,
        }
    },
    methods: {
        ...mapActions({
            pegarTodos: 'getAll'
        }),
        checkColor(status) {
            return status === 'true' ? 'green' : 'red';
        }
    },
    computed: {
        ...mapState(['users'])
    },
    created() {
        this.pegarTodos();
    },
    mounted() {
    }
}
</script>