<template>
  <div class="page-container">
      <router-view />
  </div>
</template>



<style lang="scss" scoped>
  .md-app {
    max-height: 400px;
    border: 1px solid rgba(#000, .12);
  }

   // Demo purposes only
  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
  }
</style>

<script>
// @ is an alias to /src
export default {
  name: 'home',
  data: () => ({
    menuVisible: false
  })
};
</script>