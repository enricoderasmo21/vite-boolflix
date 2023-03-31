<script>
import {store} from '../store.js';
import "/node_modules/flag-icons/css/flag-icons.min.css";

export default {
  data() {
    return {

      store,
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
    } 
  }
} 
</script>

<template>
    <div class="card">
        <span class="title">Titolo:</span > {{ card.title }} {{ card.name }} <br>
        <span class="title">Titolo originale:</span > {{ card.original_title }} {{ card.original_name }} <br>
        <span class="title">Lingua:</span> <span :class="`fi fi-${flagLanguage()}`"> </span> <br>
        <span class="title">Voto:</span > {{ card.vote_average }} <br>
    </div>
</template>

<style scoped lang="scss">
.card{
  padding: 20px;
  
  width: calc(100% / 6 - 20px);
  min-height: 120px;

  border: 1px solid #d81820;

  background-color: black;

  font-size: 0.7em;

    .title{
      color: #d81820;
    }
}

</style>