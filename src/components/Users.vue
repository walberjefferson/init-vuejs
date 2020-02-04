<template>
  <div>

    <b-table striped hover :items="users" 
    :sort-by.sync="sortBy"
    :sort-desc.sync="sortDesc" 
    sort-icon-left 
    :fields="fields"
    :current-page="currentPage"
      :per-page="perPage"
      :filter="filter"
      :filterIncludedFields="filterOn"
      :sort-direction="sortDirection"
      @filtered="onFiltered"
    >
    </b-table>

    <b-row>
      <b-col sm="4" class="my-1" offset-sm="8">
    <b-pagination
      v-model="currentPage"
      :total-rows="totalRows"
      :per-page="perPage"
      align="fill"
      size="sm"
      class="my-0"
    ></b-pagination>
    </b-col>
    </b-row>
    
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: "Users",
    data() {
      return {
        sortBy: 'id',
        sortDesc: false,
        fields: [
          { key: 'id', label: '#', sortable: true },
          { key: 'name', label: 'Nome', sortable: true },
          { key: 'email', label: 'E-mail', sortable: true },
          { key: 'active', label: 'Ativo', sortable: false, 
            formatter: (value, key, item) => {
              return value == 'true' ? 'Sim' : 'Não'
            },
          }
        ],
        totalRows: 1,
        currentPage: 1,
        perPage: 5,
        pageOptions: [20, 40, 60],

        error: null,
      }
    },
    methods: {
      onFiltered(filteredItems) {
        // Trigger pagination to update the number of buttons/pages due to filtering
        this.totalRows = filteredItems.length
        this.currentPage = 1
      }
    },
    computed: {
      ...mapState({
        users: state => state.users.all,
      })
    },
    mounted() {
      // Set the initial number of items
      this.totalRows = this.users.length
    },
    created() {
      this.$store.dispatch('users/getAllUsers')
      this.$store.dispatch('products/getAll')
    }

}
</script>