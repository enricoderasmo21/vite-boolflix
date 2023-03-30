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

  }
}
</script>

<template>

   <div id="container">
       <CardItem v-for="film in this.store.filmResultList" :card="film"></CardItem>
   </div>

</template>

<style scoped lang="scss">
#container{
    display: flex;
    flex-flow: row wrap;
    gap: 10px;

    margin-top: 80px;

    padding: 20px;
}

</style>
