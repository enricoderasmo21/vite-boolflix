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
        <div>Titolo: {{ card.title }} </div>
        <div>Titolo originale: {{ card.original_title }} </div>
        <div>Lingua: {{ card.original_lenguage }} </div>
        <div>Voto: {{ card.vote_average }} </div>
    </div>
</template>

<style scoped lang="scss">
.card{
    width: 400px;
    height: 100px;

    background-color: black;

    font-size: 0.7em;
}

</style>