<script>
import {store} from '../store.js';


import CardItem from './CardItem.vue';

export default {
  data() {
    return {

      store,
    }
  },

  components:{

    CardItem,

  },
}
</script>

<template>

  <div id="container">
    
    <!-- Home Page -->
    <div v-show="this.store.activeLink == 0">
      <div  v-if="this.store.moviesResultList.length <= 0">
        <div class="title">Film</div>
        <div id="inner-container">
          <CardItem v-for="filmThumb in this.store.movies" :card="filmThumb" ></CardItem>
        </div>
        <div class="title">Serie TV</div>
        <div id="inner-container">
          <CardItem v-for="seriesThumb in this.store.series" :card="seriesThumb" ></CardItem>
        </div>
      </div>
        
      <div v-else-if="this.store.moviesResultList.length > 0">
        <div class="title">Film</div>
        <div id="inner-container">
          <CardItem v-for="film in this.store.moviesResultList" :card="film"></CardItem>
        </div>
        <div class="title">Serie TV</div>
        <div id="inner-container">
            <CardItem v-for="series in this.store.seriesResultList" :card="series"></CardItem>
        </div>
      </div>
    </div>

    <!-- Film Page -->
    <div v-show="this.store.activeLink == 2">
      <div v-if="this.store.moviesResultList.length <= 0">
        <div class="title">Film</div>
        <div id="inner-container">
          <CardItem v-for="filmThumb in this.store.movies" :card="filmThumb" ></CardItem>
        </div>
      </div>
      <div v-else>
        <div class="title">Film</div>
        <div id="inner-container">
          <CardItem v-for="film in this.store.moviesResultList" :card="film"></CardItem>
        </div>
      </div>
    </div>

    <!-- Series Page -->
    <div v-show="this.store.activeLink == 1">
      <div v-if="this.store.seriesResultList.length <= 0">
        <div class="title">Serie TV</div>
        <div id="inner-container">
          <CardItem v-for="seriesThumb in this.store.series" :card="seriesThumb" ></CardItem>
        </div>
      </div>
      <div v-else>
        <div class="title">Serie TV</div>
        <div id="inner-container">
          <CardItem v-for="series in this.store.seriesResultList" :card="series"></CardItem>
        </div>
      </div>
    </div>

   </div>
</template>

<style scoped lang="scss">
#container{
  margin-top: 80px;

  padding: 40px 60px;

  .title{
    margin-bottom: 20px;

    font-size: 2em;
    font-weight: bold;
  }

  #inner-container{
    display: flex;
    flex-flow: row wrap;
    gap: 20px;

    margin-bottom: 60px;
  }
}

</style>
