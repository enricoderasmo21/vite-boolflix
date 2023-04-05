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

    if(this.store.activeLink == 0) {

      axios.get(this.store.APIFilmDefault).then((res) => {

        this.store.movies = res.data.results;

        console.log(res.data.results)
      });

      axios.get(this.store.APISeriesDefault).then((res) => {

        this.store.series = res.data.results;
      });
    } 
  },

  methods: {

    searchFilm(){

      if(this.store.activeLink == 0 || this.store.activeLink == 2 ) {
        
        axios.get(this.store.APIFilmSearchCall + "&query=" + this.store.userSearch).then((res) => {
          
          this.store.moviesResultList = res.data.results;

          console.log(res.data.results);
          
        });
      }
    },

    searchSeries() {

      if(this.store.activeLink == 0 || this.store.activeLink == 1) {

        axios.get(this.store.APISeriesSearchCall + "&query=" + this.store.userSearch).then((res) => {
          
          this.store.seriesResultList = res.data.results;
          
          console.log(res.data.results);
        });
      }
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
