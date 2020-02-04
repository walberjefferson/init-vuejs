<template>
  <div id="app">

  <nav class="navbar navbar-expand-lg navbar-light bg-light mb-4">
    <div class="container">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <router-link class="nav-link" :to="{name: 'home'}">Users</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{name:'about'}">About</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{name:'produtos'}">Produtos</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'filho-1'}">Filho 1</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'filho-2'}">Filho 2</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>

    <div class="container">
      <router-view />
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
    }
  },
  methods: {
  },
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
