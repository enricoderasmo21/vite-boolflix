<script>
import {store} from '../store.js';
import "/node_modules/flag-icons/css/flag-icons.min.css";

export default {
  data() {
    return {

      store,

      star: 5,
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
    } 
  }
} 
</script>

<template>
    <div class="card">
        <div class="img-container">
          <img :src="`https://image.tmdb.org/t/p/original${card.poster_path}`" alt="">
        </div>
        <span class="title">Titolo:</span > {{ card.title }} {{ card.name }} <br>
        <span class="title">Titolo originale:</span > {{ card.original_title }} {{ card.original_name }} <br>
        <span class="title">Lingua:</span> <span :class="`fi fi-${flagLanguage()}`"> </span> <br>
        <span class="title">Voto:</span> <i v-for="star in voteStar()" :class="star ? 'active': ''" class="fa-solid fa-star"></i> <br>
    </div>
</template>

<style scoped lang="scss">
.card{
  
  width: calc(100% / 6 - 20px);

  font-size: 0.7em;

  .img-container{
    width: 100%;
  }

  img{
    width: 100%;  
  }

  .title{
    color: #d81820;
  }

  .active{
    color: #d81820;
  }
}

</style>