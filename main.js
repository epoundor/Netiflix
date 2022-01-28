let i=1
const API_KEY="&api_key=35505e98d41c94519152a64ab3ef4d24",
      BASE_URL="https://api.themoviedb.org/3",
      IMG_URL="https://image.tmdb.org/t/p/original",
      slider=document.querySelector('.swiper-wrapper'),
      newMovies=document.querySelector('.new_content'),
      input=document.getElementById('search_bar');


function getMoviesList(url,show='showCard', i=1) {
    let API_URL=BASE_URL+`${url}&page=${i}`+API_KEY;

    fetch(API_URL)
    .then(res=>res.json())
    .then(data=>{
        movies=data.results;
        switch (show) {
            case 'showToSlide':
                showToSlide(movies)
                break;
            case 'showCard':
                showCard(movies)
                break;
            case 'showSearchResults':
                showSearchResults(movies);
                break;
            default:
                break;
        }
    })
}
function findById(movies) {
    
}
const showToSlide=(movies=[])=>{
        slider.innerHTML=""
        movies.forEach(movie => {
            const {title,poster_path,release_date,overview,vote_average,backdrop_path}=movie;
            let newMovie=document.createElement('div')
            newMovie.className="movie swiper-slide"
            newMovie.setAttribute("style",`background-image: url(${IMG_URL+backdrop_path});`)
            newMovie.innerHTML=`
            <div class="overlay">
                <div class="details">   
                    <div class="movie_name">${title}</div>    
                    <div class="description">        
                    <i class="icon movie_icon">   </i>        
                    <i class="movie_date">${new Date(release_date).getFullYear()}</i>  -      
                    <i class="movie_category">Adventure</i><br>        
                    <i class="movie_average">${vote_average}</i>    </div></div></div>`
    
            slider.appendChild(newMovie);  
            
        });
}
function showCard(movies=[]){
    newMovies.innerHTML=""
    movies.forEach(movie => {
        const {title,poster_path,release_date,overview,vote_average,id}=movie;
        let newMovie=document.createElement('div')
        newMovie.className="new_movie"
        newMovie.innerHTML=`
        <img src=${IMG_URL+poster_path} alt="">
        <div class="new_details">
            <div class="movie_name">${title}</div>
            <div class="new_description">
                <i class="hidden">${id}</i>
                <i class="icon movie_icon">   </i>
                <i class="movie_date">${new Date(release_date).getFullYear()??'none'}</i> -
                <i class="movie_category">Adventure</i><br>
                <i class="movie_average">${vote_average}</i>
            </div>
        </div>
        `

        newMovies.appendChild(newMovie);  
        
    });
}
function showSearchResults(movies=[]) {
    newMovies.innerHTML=""
    movies.forEach(movie => {
        const {title,poster_path,release_date,overview,vote_average,id}=movie;
        let newMovie=document.createElement('div')
        newMovie.className="new_movie"
        newMovie.innerHTML=`
        <img src=${IMG_URL+poster_path} alt="">
        <div class="new_details">
            <div class="movie_name">${title}</div>
            <div class="new_description">
                <i class="hidden">${id}</i>
                <i class="icon movie_icon">   </i>
                <i class="movie_date">${new Date(release_date).getFullYear()??'none'}</i> -
                <i class="movie_category">Adventure</i><br>
                <i class="movie_average">${vote_average}</i>
            </div>
        </div>
        `
        document.getElementById('most_average').classList.add('hidden')
        newMovies.appendChild(newMovie);  
        
    });
}
input.addEventListener('input',()=>{
    let value=input.value
    if (value!="") {
        console.log(value);
        getMoviesList(`/search/movie?query=${value}&sort_by=popularity.desc`,'showSearchResults')
    }
    else{
        document.getElementById('most_average').classList.remove('hidden')
        getMoviesList('/discover/movie?with_genres=18&primary_release_year=2022&sort_by=popularity.desc')
        console.log("object");
    }
})

getMoviesList('/discover/movie?sort_by=popularity.desc','showToSlide')
getMoviesList('/discover/movie?with_genres=18&primary_release_year=2022&sort_by=popularity.desc')