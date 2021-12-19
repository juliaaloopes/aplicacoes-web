//TMDB

const API_KEY = "api_key=e9377f8114ef0f0ab4432a851c6d2ca7";
const BASE_URL = "https://api.themoviedb.org/3";
const POSTER_URL = "https://image.tmdb.org/t/p/w200";
var size;

function fetchMovies(size) {
  fetch(BASE_URL + "/movie/now_playing?" + API_KEY)
    .then((response) => response.json())
    .then((allMovies) => {
        console.log(allMovies)
      var movies = [];
      allMovies.results.map((val) => {
        movies.push({
          title: val.title,
          overview: val.overview,
          poster_path: val.poster_path,
        });

        if (movies.length == size) {
          movies.map(function (val) {
            console.log(val);

            var trendingMovies = document.getElementById("em-cartaz");

            trendingMovies.innerHTML +=
              `
                <div class="row d-flex justify-content-center m-3 filme-box">
                    <div class=" col-sm col-md-3 text-center mb-3">
                        <img src="` + POSTER_URL + val.poster_path + `" alt="">
                    </div>
                    <div class="col text-start">
                        <p>` + val.overview + `</p>
                        <h3>` + val.title + `</h3>
                    </div>
                </div>
            `;
          });
        }
      });
    });
}

fetchMovies(10)