//TMDB

const API_KEY = 'api_key=e9377f8114ef0f0ab4432a851c6d2ca7';
const BASE_URL = 'https://api.themoviedb.org/3';

fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=e9377f8114ef0f0ab4432a851c6d2ca7')
    .then(response => response.json())
    .then(trendingMovies => {
        console.log(trendingMovies);

        var titles = [];
        trendingMovies.results.map((val)=>{
            titles.push({title:val.title});
        })

        titles.map((val)=>{
            console.log(val.title);
        })
    })


//IMDB

fetch('https://imdb-api.com/en/API/MostPopularMovies/k_do7v88k7')
    .then(response => response.json())
    .then(popularMovies => {
        console.log(popularMovies);
    })
