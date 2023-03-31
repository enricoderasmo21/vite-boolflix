import {reactive} from 'vue';

export const store = reactive({

    APIFilmSearchCall: 'https://api.themoviedb.org/3/search/movie?api_key=321ecf56c040c128560f49c37f89719e',

    APISeriesSearchCall: 'https://api.themoviedb.org/3/search/tv?api_key=321ecf56c040c128560f49c37f89719e',

    userSearch: "",

    filmResultList: [],

    seriesResultList: [],

});