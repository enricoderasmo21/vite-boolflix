import {reactive} from 'vue';

export const store = reactive({

    APIFilmDefault: 'https://api.themoviedb.org/3/trending/movie/week?api_key=321ecf56c040c128560f49c37f89719e',

    APISeriesDefault: 'https://api.themoviedb.org/3/trending/tv/week?api_key=321ecf56c040c128560f49c37f89719e',

    APIFilmSearchCall: 'https://api.themoviedb.org/3/search/movie?api_key=321ecf56c040c128560f49c37f89719e',

    APISeriesSearchCall: 'https://api.themoviedb.org/3/search/tv?api_key=321ecf56c040c128560f49c37f89719e',

    userSearch: "",

    activeLink: 0,

    movies: [],

    series: [],

    moviesResultList: [],

    seriesResultList: [],

});