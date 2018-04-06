const movieSelect = (item) => {
  const selector = document.getElementById(item.id);
  const val = selector.getAttribute("select") === "true" ? "false" : "true";
  selector.setAttribute('select', val);
}

const init = () => {
  fetch('http://127.0.0.1:5000/movies/list/345345')
    .then(function (response) {
      return response.json();
    })
    .then(function (movies) {
      const item = document.getElementById("movie-list")
      item.innerHTML = '';
      count = movies.length;
      let content = '';
      for (let index = 0; index < count; index++) {
        movie = movies[index];
        content += `<div class='movie-item'
          onClick='movieSelect(this)' 
          id='movieSelector:${movie.movieId}'
          select='false'>
            <img class='image' src=${movie.image} />
            <div class='content'>
              <p class = 'name'>${movie.title}</p>
            </div>
          </div>`;
      }
      item.innerHTML = content;
    }).catch(function (err) {
      console.log(err);
    })
}

const findMore = () =>{
  fetch('http://127.0.0.1:5000/movies/list/2')
    .then(function (response) {
      return response.json();
    })
    .then(function (movies) {
      const item = document.getElementById("movie-list")
      item.innerHTML = '';
      count = movies.length;
      let content = '';
      for (let index = 0; index < count; index++) {
        movie = movies[index];
        content += `<div class='movie-item'
          onClick='movieSelect(this)' 
          id='movieSelector:${movie.movieId}'
          select='false'>
            <img class='image' src=${movie.image} />
            <div class='content'>
              <p class = 'name'>${movie.title}</p>
            </div>
          </div>`;
      }
      item.innerHTML = content;
    }).catch(function () {

    })
}