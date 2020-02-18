<template>
  <div>
    <h1>Produtos</h1>

    <div class="row">
      <div class="col-12 mb-4" v-for="p in products" :key="p.id">
        <b-card :title="p.title">
          <b-card-text>
            Valor R$ {{ p.price | moeda_real }}
          </b-card-text>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'home',
  computed: {
    ...mapState({
        products: state => state.products.all
      })
  },
  created() {
    this.$store.dispatch('products/getAll')
  }
};
</script>