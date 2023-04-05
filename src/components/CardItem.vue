<script>
import {store} from '../store.js';
import "/node_modules/flag-icons/css/flag-icons.min.css";

export default {
  data() {
    return {

      store,

      star: 5,

      viewInfo: false,
    }
  },

  props: {
    card: Object,
  },

  methods: {

    flagLanguage() {
      
      let language = this.card.original_language;
      
      if (language == "en") {
        language = "gb";
      }

      if (language == "zh") {
        language = "cn";
      }

      if (language == "ja") {
        language = "jp";
      }

      if (language == "ko") {
        language = "kr";
      }

      else if (language == "") {
        language = "sconosciuta"
      }

      return language;
    },

    voteStar(){

      let vote = Math.ceil(this.card.vote_average / 2);

      let starActive = Array(vote).fill(1);
      let starEmpty = Array(this.star - vote).fill(0);

      return starActive.concat(starEmpty);
    },
  }
} 
</script>

<template>
    <div class="card" @mouseover="viewInfo = true" @mouseleave="viewInfo = false">

        <div class="img-container-null" v-if="this.card.poster_path == null">
          <img  src="/img/null.jpg" alt="" class="null">
        </div>
        <div class="img-container" v-else>
          <img :src="`https://image.tmdb.org/t/p/original${card.poster_path}`" alt="">
        </div>

        <div id="card-info" v-show="viewInfo">
          <div class="text-row"> <span class="title">Titolo:</span > {{ card.title ? card.title : card.name }} </div>
          <div class="text-row"> <span class="title">Titolo originale:</span > {{ card.original_title }} {{ card.original_name }}</div> 
          <div class="text-row"> <span class="title">Lingua:</span> <span :class="`fi fi-${flagLanguage()}`"> </span> </div>
          <div class="text-row"> <span class="title">Voto:</span> <i v-for="star in voteStar()" :class="star ? 'active': ''" class="fa-solid fa-star"></i> </div>
          <a id="play" href=""> <i class="fa-regular fa-circle-play"></i> </a>
        </div>
    </div>
</template>

<style scoped lang="scss">
.card{
  flex-shrink: 0;

  margin-bottom: 80px;
  
  width: calc(100% / 6 - 20px);

  font-size: 0.7em;

  transition: all .2s ease-in-out;

  cursor: pointer;

  .img-container-null{
    height: 330px;

    overflow: hidden;

    img{
      width: 100%;

      object-position: 0 -35px;
    }
  }

  .img-container{
    width: 100%;
    
    img{
      width: 100%; 
    }
  }

  #card-info{
    position: relative;

    padding: 10px 10px;

    width: 100%;
    min-height: 125px;

    border-radius: 0 0 20px 20px;

    background-color: #181818;

    .text-row{
      font-size: 1.1em;


      .title{
        color: #d81820;
        
        font-weight: bold;
      }
    
      .active{
        color: #d81820;
      }
    }

    #play{
      position: absolute;
      right: 10px;
      bottom: 10px;

      color: white;
      font-size: 3em;

    }
  }

  &:hover{
    transform: scale(1.5);

    border: 2px solid #181818;
    border-radius: 20px;

    box-shadow: 20px 20px 10px rgba(0, 0, 0, 0.6);
  }

  &:hover #card-info{
    position: absolute;
    bottom: -20px;
  }

  &:hover .img-container{
    border-radius: 20px;

    overflow: hidden;
  }
}

</style>