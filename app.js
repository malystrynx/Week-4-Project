// FAKE API
https://www.omdbapi.com/?i=tt3896198&apikey=6d5a5da9

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