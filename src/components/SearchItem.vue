<script>
import {store} from '../store.js';

export default {
    
  data() {
    return {

      store,
    }
  },

}
</script>

<template>

    <div id="search-inner">
        <input v-model="store.filmSearch" @keyup.enter="$emit('searchFilm')" id="searchbar" type="text" placeholder="Scrivi il nome di un film o di una serie TV...">
        <button @click="$emit('searchFilm')" id="btn">CERCA</button>
    </div>
 
</template>

<style scoped lang="scss">
#search-inner{
  display: flex;
  gap: 20px;

  #searchbar{
    min-width: 300px;
  }

  #btn{
    padding: 6px 20px;

    border-style: none;
    border-radius: 20px;
    
    background-color: #d71820;

    font-weight: bold;

    cursor: pointer;
  }
}

</style>