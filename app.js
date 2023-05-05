// FAKE API

// https://www.omdbapi.com/?i=tt3896198&apikey=6d5a5da9&s=fast


// NAVIGATION BAR SCROLL
function changeScrolling(){
    var nav = document.getElementById('nav');
    var scrollValue = window.scrollY;
    if(scrollValue < 150){
nav.classList.remove('scrolling');
    } else{
        nav.classList.add('scrolling')
    }
}

window.addEventListener('scroll', changeScrolling);

// MOVIES
// References

// GET RANDOM IMAGES IN FRONT SCREEN
// async function main(){
//     const users = await fetch("https://www.omdbapi.com/?i=tt3896198&apikey=6d5a5da9&s=fast");
//     const usersData = await users.json();
//     console.log(usersData)
// }

// main()


// const keywords = ['action','thriller', 'comedy', 'drama','sci-fi','anime','cartoon'];


// const keyword = keywords[Math.floor(Math.random() * keywords.length)];

// // API URL with search query and API key
// const apiUrl = `https://www.omdbapi.com/?s=${keyword}&apikey=6d5a5da9`;


// fetch(apiUrl)
//   .then(response => response.json())
//   .then(data => {
    
//     const posters = data.Search.map(movie => movie.Poster).slice(0, 6);


//     const posterGrid = document.getElementById('poster-grid');
//     posters.forEach(poster => {
//       const posterElement = document.createElement('div');
//       posterElement.className = 'poster';
//       posterElement.innerHTML = `<img src="${poster}">`;
//       posterGrid.appendChild(posterElement);
//     });
//   });


//   const apiKey = '6d5a5da9';
//       const posterGrid = document.getElementById('poster-grid');
//       const searchForm = document.getElementById('search-form');
      
//       const loadPosters = async (url) => {
//         posterGrid.innerHTML = '';
//         const response = await fetch(url);
//         const data = await response.json();
//         if (data.Response === 'True') {
//           const posters = data.Search.map(movie => movie.Poster);
//           posters.forEach(poster => {
//             const posterElement = document.createElement('div');
//             posterElement.className = 'poster';
//             const posterImage = document.createElement('img');
//             posterImage.src = poster;
//             posterElement.appendChild(posterImage);
//             posterGrid.appendChild(posterElement);
//           });
//         } else {
//           const errorElement = document.createElement('p');
//           errorElement.textContent = data.Error;
//           posterGrid.appendChild(errorElement);
//         }
//       };
      
//       searchForm.addEventListener('submit', event => {
//         event.preventDefault();
//         const searchInput = document.getElementById('search-input');
//         const searchTerm = searchInput.value;
//         const apiUrl = `https://www.omdbapi.com/?apikey=${apiKey}&s=${searchTerm}`;
//         loadPosters(apiUrl);
//       });

// WHEN YOU SEARCH FOR MOVIES 
// <input onchange="searchMovies()" class="search-bar" placeholder="Search for movies..." type="text" >
      // searchJS
      // MOVIE__NAME AND MOVIE__EDIT

async function main(){
  const users = await fetch("https://www.omdbapi.com/?i=tt3896198&apikey=6d5a5da9")
  const usersData = await users.json();
  console.log(usersData)
  usersData.map((users)
  )
  const x =`<div class="search">
  <div class="card">
      <div class="header data-header"><img class="movie__search" src="./pictures/JS pics/avatar.jpg" alt=""></div>
      <div class="body data-body"><h1>movie title</h1></div>
  </div>
</div>`
}
main()
