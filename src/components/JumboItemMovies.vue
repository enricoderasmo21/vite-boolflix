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
        <div id="jumbo-gradient"></div>
        <img v-if="store.movies.length > 0" :src="`https://image.tmdb.org/t/p/original${this.store.movies[this.store.index].backdrop_path}`">
        <div v-else> loading </div>
    </div>
</template>

<style scoped lang="scss">

#jumbo-container{
    position: relative;

    margin-top: 80px;

    height: 400px;
    width: 100%;

    #jumbo-gradient{
        position: absolute;
        top: 450px;

        width: 100%;
        height: 200px;

        background-image: linear-gradient(rgba(0,0,0,0), rgba(11,11,11,1));
    }
    
    img{
        width: 100%;
        height: 650px;
        
        object-fit: cover;
        object-position: center;
    }
}
</style>