<script>
import {store} from '../store.js';

import SearchItem from './SearchItem.vue';

export default {
    
  data() {
    return {

      store,

      links: ["Home", "Serie TV", "Film", "Nuovi e popolari", "La mia lista", "Sfoglia per lingua"],
  
    }
  },

  methods: {

    clickLink(index) {
        this.store.activeLink = index;

        this.store.moviesResultList = [];
        this.store.seriesResultList = [];
        this.store.userSearch = '';

        if(this.store.activeLink == 0) {
          
          this.store.arrayName = 'movies';

          this.store.index = 0;
        }

        if(this.store.activeLink == 1) {

          this.store.arrayName = 'series';

          this.store.index = 0;
        }

        if(this.store.activeLink == 2) {

          this.store.arrayName = 'movies';

          this.store.index = 0;
        }
    },
    

  },

  components: {
    SearchItem,

  }


}
</script>

<template>
    <nav>
        <div id="navbar">

            <div id="left-inner">
              <div id="logo">
                <img src="/img/logo.png" alt="">
              </div>

              <ul id="link-list">
                <li v-for="(link, index) in this.links" @click="clickLink(index)" class="link" :class="index == this.store.activeLink ? 'active' : ''"> {{ link }}</li>
              </ul>
            </div>

            <SearchItem @search="$emit('search')"></SearchItem>
        </div>

    </nav>
</template>

<style scoped lang="scss">
#navbar{
    position: fixed;
    left: 0;
    top: 0;

    z-index: 4;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding: 20px 50px;

    width: 100%;
    height: 80px;

    background-color: #0b0b0b;

    box-shadow: 8px 15px 20px rgba(0, 0, 0, .8);

    #left-inner{
        display: flex;
        flex-direction: row;
        align-items: center;

        gap: 40px;

        #logo{
            width: 100px;
    
            img{
                width: 100%;
            }
        }
    
        #link-list{
            display: flex;
            flex-direction: row;
            gap: 15px;

            .link{
                opacity: .6;

                cursor: pointer;
            }
        }
    }

}


</style>
