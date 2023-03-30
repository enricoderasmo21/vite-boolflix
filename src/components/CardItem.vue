<script>
import {store} from '../store.js';

export default {
  data() {
    return {

      store,
    }
  },

  props: {
    card: Object,
  },
}
</script>

<template>
    <div class="card">
        <span class="title">Titolo:</span > {{ card.title }} <br>
        <span class="title">Titolo originale:</span > {{ card.original_title }} <br>
        <span class="title">Lingua:</span > {{ card.original_lenguage }} <br>
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