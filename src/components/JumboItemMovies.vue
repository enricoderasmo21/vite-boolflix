<script>
import {store} from '../store.js';

export default{
    data(){
        return{
            store,

        }
    },

    computed:{

        item(){

            return this.store[this.store.arrayName][this.store.index];
        },

        isVisible(){
            
            if(this.store[this.store.arrayName].length > 0) {
                
                return true

            } else {

                return false
            }
        }
    },
}

</script>

<template>
    <div id="jumbo-container" v-if="isVisible">
        <div id="jumbo-gradient"></div>
        <div id="null-container" v-if="item.backdrop_path == null">
            <img src="/img/logo.png" alt="">
        </div>
        <div v-else>
            <img :src="`https://image.tmdb.org/t/p/original${item.backdrop_path}`">
        </div>
        
        <div class="jumbo-info">
            <div class="title">{{item.original_title ? item.original_title : item.name}}</div>
            <div class="overview"> {{ item.overview }}</div>
        </div>
    </div>
</template>

<style scoped lang="scss">

#jumbo-container{
    position: relative;

    margin-top: 80px;

    width: 100%;
    height: 530px;

    #jumbo-gradient{
        position: absolute;
        top: 450px;

        width: 100%;
        height: 200px;

        background-image: linear-gradient(rgba(0,0,0,0), rgba(11,11,11,1));
    }

    #null-container{
        margin: 0 auto;

        width: 60%;

        img{
            width: 100%;

            object-fit: contain;

            object-position: 0 100px;
        }
    }
    
    img{
        width: 100%;
        height: 650px;
        
        object-fit: cover;
        object-position: center;
    }

    

    .jumbo-info{
        position: absolute;
        bottom: -50px;
        left: 40px;

        .title{
            margin-bottom: 30px;

            font-size: 3em;
            font-weight: bold;

            text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
        }
        .overview{
            width: 40%;

            font-size: 1.1em;

            text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.7);
        }
    }
}
</style>