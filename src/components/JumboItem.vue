<script>
import {store} from '../store.js';

export default{
    data(){
        return{
            store,     
        }
    },
}

</script>

<template>
    <div id="jumbo-container">
        <img :src="`https://image.tmdb.org/t/p/original${this.store.movies[this.store.index].poster_path}`">
    </div>
</template>

<style scoped lang="scss">

#jumbo-container{
    margin-top: 80px;

    height: 400px;
    width: 100%;

    img{
        width: 100%;
        height: 640px;

        object-fit: cover;
        object-position: bottom;
    }
}
</style>