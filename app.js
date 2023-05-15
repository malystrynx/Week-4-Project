// FAKE API

// https://www.omdbapi.com/?i=tt3896198&apikey=6d5a5da9

// NAVIGATION BAR SCROLL
function changeScrolling() {
  var nav = document.getElementById("nav");
  var scrollValue = window.scrollY;
  if (scrollValue < 150) {
    nav.classList.remove("scrolling");
  } else {
    nav.classList.add("scrolling");
  }
}

window.addEventListener("scroll", changeScrolling);

// MOVIE SEARCH

async function onSearchChange(event) {
  const search = event.target.value;
  const movies = await fetch(
    `https://www.omdbapi.com/?i=tt3896198&apikey=6d5a5da9&s=${search}`
  );
  const cardEl = document.querySelector(".cards");
  const moviesData = await movies.json();

  const searchResults = moviesData.Search || [];

  cardEl.innerHTML = searchResults
    .slice(0, 6) 
    .map(
      (movie) => `
        <div class="card">
            <div class="header data-header"><img class="movie__search" src="${movie.Poster}" alt="This image is unavailable"></div>
            <div class="body data-body"><h1>${movie.Title}</h1></div>
            <div class="body data-body"><h1>${movie.Year}</h1></div>
        </div>

    `
    )
    .join(""); 
    const cardsContainer = document.querySelector(".cards");
  cardsContainer.scrollIntoView({ behavior: "smooth" });
}

async function main() {
  const movies = await fetch(
    "https://www.omdbapi.com/?i=tt3896198&apikey=6d5a5da9&s=fast"
  );
  const moviesData = await movies.json();
  const cardEl = document.querySelector(".cards");
  
  cardEl.innerHTML = moviesData.Search
    .slice(0, 6) 
    .map(
      (movie) => `
      <div class="card">
      <div class="header data-header"><img class="movie__search" src="${movie.Poster}" alt="This image is unavailable"></div>
      <div class="body data-body"><h1>${movie.Title}</h1></div>
      <div class="body data-body"><h1>${movie.Year}</h1></div>
  </div>
    `
    )
    .join("");
}

main();


