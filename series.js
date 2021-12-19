//TMDB

const API_KEY = "api_key=e9377f8114ef0f0ab4432a851c6d2ca7";
const BASE_URL = "https://api.themoviedb.org/3";
const POSTER_URL = "https://image.tmdb.org/t/p/w200";
var size;


function fetchShows(size) {
  fetch(BASE_URL + "/tv/popular?" + API_KEY + "&language=en-US&page=1")
    .then((response) => response.json())
    .then((allTV) => {
      var series = [];
      allTV.results.map((val) => {
        series.push({
          name: val.name,
          poster_path: val.poster_path,
        });

        if (series.length == size) {
          series.map(function (val) {
            console.log(val.name);

             var trendingShows = document.getElementById("em-alta");

            trendingShows.innerHTML +=
              `
                <div class="col em-alta-box">
                    <img src="` + POSTER_URL + val.poster_path + `" alt="">
                    <p>` + val.name + `</p>
                </div>
            `;
          });
        }
      });
    });
}

fetchShows(20)