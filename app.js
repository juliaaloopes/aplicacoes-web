//TMDB

const API_KEY = "api_key=e9377f8114ef0f0ab4432a851c6d2ca7";
const BASE_URL = "https://api.themoviedb.org/3";
const POSTER_URL = "https://image.tmdb.org/t/p/w200";
var size;

function fetchMovies(size) {
  fetch(BASE_URL + "/movie/now_playing?" + API_KEY)
    .then((response) => response.json())
    .then((allMovies) => {
      var movies = [];
      allMovies.results.map((val) => {
        movies.push({
          title: val.title,
          poster_path: val.poster_path,
        });

        if (movies.length == size) {
          movies.map(function (val) {
            console.log(val.title);

            var trendingMovies = document.getElementById("trendingMovies");

            trendingMovies.innerHTML +=
              `
                <div class="movieCard">
                    <img src="` +
              POSTER_URL +
              val.poster_path +
              `" alt="">
                </div>
            `;
          });
        }
      });
    });
}

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

            var trendingMovies = document.getElementById("trendingShows");

            trendingMovies.innerHTML +=
              `
                <div class="tvCard">
                    <img src="` +
              POSTER_URL +
              val.poster_path +
              `" alt="">
                </div>
            `;
          });
        }
      });
    });
}

fetchMovies(10);
fetchShows(10);

const jsonGen = '{"genres":[{"id":28,"name":"Action"},{"id":12,"name":"Adventure"},{"id":16,"name":"Animation"},{"id":35,"name":"Comedy"},{"id":80,"name":"Crime"},{"id":99,"name":"Documentary"},{"id":18,"name":"Drama"},{"id":10751,"name":"Family"},{"id":14,"name":"Fantasy"},{"id":36,"name":"History"},{"id":27,"name":"Horror"},{"id":10402,"name":"Music"},{"id":9648,"name":"Mystery"},{"id":10749,"name":"Romance"},{"id":878,"name":"Science Fiction"},{"id":10770,"name":"TV Movie"},{"id":53,"name":"Thriller"},{"id":10752,"name":"War"},{"id":37,"name":"Western"}]}';
const genObjs = JSON.parse(jsonGen);
var sz = genObjs.genres.length;
console.log(genObjs.genres[3].id)
console.log(typeof genObjs.genres[3].name)

var genre_list = (genre) => {
    //console.log(genre);
    for (var i = 0; i < sz; i++) {
        //console.log(genObj.genres[i].id);
        if (genre == genObjs.genres[i].name) {
            let genId = genObjs.genres[i].id;
            console.log(genId);
            return genId;
        }
    }
}




function fetchRan(size, tipo) {
  var select = document.getElementById('escolha');
  var value = select.options[select.selectedIndex].value;
  console.log(parseInt(value))
  fetch(BASE_URL + '/discover/'+ tipo +'?' + API_KEY + '&language=en-US' + '&page=' + Math.floor(Math.random() * (500 - 0 + 1) + 0) + '&with_genres=' + genre_list(value))
  .then(response=> response.json())
  .then(allDisc => {
    var discover=[];
    allDisc.results.map((val)=> {

      if (tipo == 'tv') {
        discover.push( {
            name: val.name,
            poster_path: val.poster_path
        });
      } else {
        discover.push( {
            name: val.title,
            poster_path: val.poster_path
        });
      }
      
      if (discover.length == size) {
        discover.map(function(val) {
          var discoverMov = document.getElementById('discoverMov');
            
          discoverMov.innerHTML = `
                  <img src="` + POSTER_URL + val.poster_path + `" alt="">
                  <p style="color: #fff">`+ val.name +`</p>
          `;
        })
      }
    })
  })
}
            



document.getElementById('myButton').onclick = () => {
  let checkSerie = document.querySelector('#serie:checked') !== null;
  console.log('checkSerie', checkSerie);

  if (checkSerie == true) {
    fetchRan(1, 'tv');
  }else {
  }

  let checkMovie = document.querySelector('#filmes:checked') !== null;
  console.log('checkMovie', checkMovie);

  if (checkMovie == true) {
    fetchRan(1, 'movie');
  }else {
  }

  if (checkMovie && checkSerie == true) {
    alert("Choose 1 only one")
  }
}