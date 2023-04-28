// FAKE API
https://www.omdbapi.com/?i=tt3896198&apikey=6d5a5da9
https://www.omdbapi.com/?i=tt3896198&apikey=6d5a5da9&s=fast


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
async function main(){
    const users = await fetch("https://www.omdbapi.com/?i=tt3896198&apikey=6d5a5da9&s=fast");
    const usersData = await users.json();
    console.log(usersData)
}

main()

