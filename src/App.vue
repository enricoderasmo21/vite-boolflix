<script>
import {store} from './store.js';
import axios from 'axios';

import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

export default {
  data() {
    return {

      store,
    }
  },

  components: {

    AppHeader,
    AppMain

  },

  created() {

    
  },

  methods: {

    searchFilm(){
      
      axios.get(this.store.APISearchCall + "&query=" + this.store.filmSearch).then((res) => {

      console.log(res)
  
      this.store.filmResultList = res.data.results;

      console.log(res.data.results);
      
      });
    }
  }
}
</script>

<template>

  <AppHeader @searchFilm="searchFilm()"></AppHeader>
  <AppMain></AppMain>
 
</template>

<style scoped lang="scss">

</style>
