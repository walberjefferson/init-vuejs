import Vue from 'vue'

Vue.filter('moeda_real', function (value) {
    if (!value) return ''
    return value.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
});