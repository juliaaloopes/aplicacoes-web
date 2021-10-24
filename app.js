//TMDB

const API_KEY='api_key=e9377f8114ef0f0ab4432a851c6d2ca7';
const BASE_URL='https://api.themoviedb.org/3';
const POSTER_URL = 'https://image.tmdb.org/t/p/w200';
var size;


function fetchMovies(size) {
    fetch(BASE_URL + '/movie/now_playing?api_key=e9377f8114ef0f0ab4432a851c6d2ca7')
    .then(response=> response.json())
    .then(allMovies => {
        var movies=[];
        allMovies.results.map((val)=> {
            movies.push( {
                title: val.title,
                poster_path: val.poster_path,
            });

            

            if (movies.length == size) {
                movies.map(function(val) {
                    console.log(val.title);

                    var trendingMovies = document.getElementById('trendingMovies');
                    
                       trendingMovies.innerHTML += `
                            <div class="col-sm movieCard">
                                <img src="` + POSTER_URL + val.poster_path + `" alt=""> 
                                <h4>` + val.title + `</h4> 
                            </div>
                        `;
                })
            }
            
        })  
    })
}

function fetchShows(size) {
    fetch(BASE_URL + '/tv/popular?api_key=e9377f8114ef0f0ab4432a851c6d2ca7&language=en-US&page=1')
    .then(response=> response.json())
    .then(allTV => {
        var series=[];
        allTV.results.map((val)=> {
            series.push( {
                name: val.name,
                poster_path: val.poster_path
            });

            if (series.length == size) {
                series.map(function(val) {
                    console.log(val.name);

                    var trendingMovies = document.getElementById('trendingShows');
                    
                       trendingMovies.innerHTML += `
                            <div class="col-sm tvCard">
                                <img src="` + POSTER_URL + val.poster_path + `" alt=""> 
                                <h4>` + val.name + `</h4> 
                            </div>
                        `;
                })
            }
            
        })  
    })
}

fetchMovies(3);
fetchShows(3);

