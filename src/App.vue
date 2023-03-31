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
      
      axios.get(this.store.APIFilmSearchCall + "&query=" + this.store.userSearch).then((res) => {
  
      this.store.filmResultList = res.data.results;

      console.log(res.data.results);
      
      });
    },

    searchSeries() {

      axios.get(this.store.APISeriesSearchCall + "&query=" + this.store.userSearch).then((res) => {
  
      this.store.seriesResultList = res.data.results;

      console.log(res.data.results);
  
  });


    }
  }
}
</script>

<template>

  <AppHeader @search="searchFilm(), searchSeries()"></AppHeader>
  <AppMain></AppMain>
 
</template>

<style scoped lang="scss">

</style>
