<script>
import {store} from '../store.js';


import CardItem from './CardItem.vue';
import JumboItemMovies from './JumboItemMovies.vue';

export default {
  data() {
    return {

      store,
    }
  },

  components:{

    CardItem,
    JumboItemMovies,

  },

  methods: {
    // Scroll bar home-film
    scrollLeft(id){
      let left = document.querySelector(id);

      left.scrollBy(-1400, 0);

      console.log(event)
    },

    scrollRight(id){
      let right = document.querySelector(id);

      right.scrollBy(1400, 0);
    },

    activeJumboIndex(index){
      this.store.index = index;
    }
  }
}
</script>

<template>

<div v-show="this.store.activeLink == 0 || this.store.activeLink == 2">
  <JumboItemMovies></JumboItemMovies>
</div>

  <div id="container">
    
    <!-- Home Page -->
    <div v-show="this.store.activeLink == 0">

      <div  v-if="this.store.moviesResultList.length <= 0 || this.store.seriesResultList.length <= 0">
        <div class="title">Film</div>
        <div class="slider">
          <div @click="scrollLeft('#home-movies')" class="slider-btn btn-left">
            <i class="fa-solid fa-chevron-left"></i>
          </div>
          <div @click="scrollRight('#home-movies')" class="slider-btn btn-right">
            <i class="fa-solid fa-chevron-right"></i>
          </div>
        <div id="home-movies" class="inner-container">
          <CardItem v-for="(filmThumb, index) in this.store.movies" :card="filmThumb" @click="activeJumboIndex(index)"></CardItem>
        </div>
      </div>

        <div class="title">Serie TV</div>
        <div class="slider">
          <div @click="scrollLeft('#home-series')" class="slider-btn btn-left">
            <i class="fa-solid fa-chevron-left"></i>
          </div>
          <div @click="scrollRight('#home-series')" class="slider-btn btn-right">
            <i class="fa-solid fa-chevron-right"></i>
          </div>
        <div id="home-series" class="inner-container">
          <CardItem v-for="seriesThumb in this.store.series" :card="seriesThumb" ></CardItem>
        </div>
        </div>
      </div>
        
      <div v-else-if="this.store.moviesResultList.length > 0 || this.store.seriesResultList.length > 0">

        <div class="title">Film</div>
        <div class="slider">
          <div @click="scrollLeft('#home-movies-result')" class="slider-btn btn-left">
            <i class="fa-solid fa-chevron-left"></i>
          </div>
          <div @click="scrollRight('#home-movies-result')" class="slider-btn btn-right">
            <i class="fa-solid fa-chevron-right"></i>
          </div>
          <div id="home-movies-result" class="inner-container">
            <CardItem v-for="film in this.store.moviesResultList" :card="film"></CardItem>
          </div>
        </div>

        <div class="title">Serie TV</div>
        <div class="slider">
          <div @click="scrollLeft('#home-series-result')" class="slider-btn btn-left">
            <i class="fa-solid fa-chevron-left"></i>
          </div>
          <div @click="scrollRight('#home-series-result')" class="slider-btn btn-right">
            <i class="fa-solid fa-chevron-right"></i>
          </div>
          <div id="home-series-result" class="inner-container">
              <CardItem v-for="series in this.store.seriesResultList" :card="series"></CardItem>
          </div>
        </div>
      </div>
    </div>

    <!-- Film Page -->
    <div v-show="this.store.activeLink == 2">

      <div v-if="this.store.moviesResultList.length <= 0">

        <div class="title">Film</div>
        <div class="slider">
          <div @click="scrollLeft('#film-movies')" class="slider-btn btn-left">
            <i class="fa-solid fa-chevron-left"></i>
          </div>
          <div @click="scrollRight('#film-movies')" class="slider-btn btn-right">
            <i class="fa-solid fa-chevron-right"></i>
          </div>
          <div id="film-movies" class="inner-container">
            <CardItem v-for="filmThumb in this.store.movies" :card="filmThumb" ></CardItem>
          </div>
        </div>
      </div>

      <div v-else>

        <div class="title">Film</div>
        <div class="slider">
          <div @click="scrollLeft('#film-movies-result')" class="slider-btn btn-left">
            <i class="fa-solid fa-chevron-left"></i>
          </div>
          <div @click="scrollRight('#film-movies-result')" class="slider-btn btn-right">
            <i class="fa-solid fa-chevron-right"></i>
          </div>
          <div id="film-movies-result" class="inner-container">
            <CardItem v-for="film in this.store.moviesResultList" :card="film"></CardItem>
          </div>
        </div>
      </div>
    </div>

    <!-- Series Page -->
    <div v-show="this.store.activeLink == 1">

      <div v-if="this.store.seriesResultList.length <= 0">

        <div class="title">Serie TV</div>
        <div class="slider">
          <div @click="scrollLeft('#serie_tv-series')" class="slider-btn btn-left">
            <i class="fa-solid fa-chevron-left"></i>
          </div>
          <div @click="scrollRight('#serie_tv-series')" class="slider-btn btn-right">
            <i class="fa-solid fa-chevron-right"></i>
          </div>
          <div id="serie_tv-series" class="inner-container">
            <CardItem v-for="seriesThumb in this.store.series" :card="seriesThumb" ></CardItem>
          </div>
        </div>
      </div>

      <div v-else>
        
        <div class="title">Serie TV</div>
        <div class="slider">
          <div @click="scrollLeft('#serie_tv-series-result')" class="slider-btn btn-left">
            <i class="fa-solid fa-chevron-left"></i>
          </div>
          <div @click="scrollRight('#serie_tv-series-result')" class="slider-btn btn-right">
            <i class="fa-solid fa-chevron-right"></i>
          </div>
          <div id="serie_tv-series-result" class="inner-container">
            <CardItem v-for="series in this.store.seriesResultList" :card="series"></CardItem>
          </div>
        </div>
      </div>
    </div>

   </div>
</template>

<style scoped lang="scss">
#container{
  margin-top: 80px;

  padding: 40px 0px 40px 20px;

  .slider{
    position: relative;

    
    .slider-btn{
    position: absolute;
    top: 80px;

    display: flex;
    justify-content: center;
    align-items: center;

    z-index: 3;

    height: 63%;
    width: 50px;

    font-size: 1.8em;

    background-color: rgba(0, 0, 0, 0.4);

    cursor: pointer;

    &.btn-left{
      left: 0;
    }

    &.btn-right{
      right: 0;
    }
  }


  }

  .title{
    font-size: 2em;
    font-weight: bold;
  }

  .inner-container{
    position: relative;
    
    display: flex;
    flex-flow: row nowrap;
    gap: 20px;
    overflow-x: auto;

    padding: 80px 60px 30px 60px;

    width: 100%;

    scroll-behavior: smooth; 
  }
}

</style>
