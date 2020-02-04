<template>
  <div>

    <div class="row">
      <div class="col-4 mb-4" v-for="user in users" :key="user.id">
        <b-card :title="user.name" :sub-title="user.email">
          <b-card-text>
              Active: <b-badge pill :variant="[user.active ? 'success' : 'danger']">{{ user.active }}</b-badge>
          </b-card-text>
        </b-card>

        
      </div>
    </div>
    
  </div>
</template>

<script>
import axios from 'axios'

export default {
    name: "Users",
    data() {
      return {
        error: null,
        users: [],
        products: []
      }
    },
    methods: {
      
    },
    mounted() {
      axios.get('api/users').then(({data}) => {
        this.users = data.users;
      }).catch(({response}) => (this.error = response.data));

      axios.get('api/products').then(res => {
        this.products = res.data.products;
      });
    }

}
</script>