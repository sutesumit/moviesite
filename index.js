const APIKEY = "20c893d79dff70e6a83c0629f1b77f8f"
const APILINK = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=' + APIKEY + '&page=1'
const IMGPATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCHPATH = 'https://api.themoviedb.org/3/search/movie?&api_key=' + APIKEY + '&query='
var FETCHURL = APILINK

// const returnSearchLink = (url) => {
//     document.getElementById('searchForm').addEventListener('submit', (event) => {
//         event.preventDefault()
//         FETCHURL = url + document.getElementById('search').value + '"'
//     })
// }

const returnMovies = (url) => {
    document.getElementById('all-movies').innerHTML = ''
    fetch(url).then( res => res.json())
                .then((data) => {
                    data.results.forEach( element => {
                        const movieCard = document.createElement('div')
                        movieCard.setAttribute('class', 'movie-card')
                        movieCard.setAttribute('id', 'movie-card')

                        const moviePoster = document.createElement('img')
                        moviePoster.setAttribute('src', IMGPATH + element.poster_path)

                        const movieName = document.createElement('h4')
                        movieName.textContent = element.title

                        movieCard.appendChild(moviePoster)
                        movieCard.appendChild(movieName)
                        document.getElementById('all-movies').appendChild(movieCard)
                    })
                })

}

returnMovies(FETCHURL)

const returnSearched = () => {
    
    document.getElementById('searchForm').addEventListener('submit', (event) => {
        event.preventDefault()
        FETCHURL = SEARCHPATH + document.getElementById('search').value + '"'
        // document.getElementById('search').value = ''
        returnMovies(FETCHURL)
        
    })
}

returnSearched()





// const returnMovies = (url) => {
//     fetch(url).then(res => res.json())
//                 .then( (data) => {
//                     const movies = data.results
                    
//                     movies.forEach( movie => {

                        

//                         const movieCard = document.createElement('div')
//                         movieCard.setAttribute('class', 'movie-card')
//                         movieCard.setAttribute('id', 'movie-card')

//                         const moviePoster = document.createElement('img')
//                         moviePoster.setAttribute('src', IMGPATH + movie.poster_path)

//                         const movieTitle = document.createElement('h4')
//                         movieTitle.textContent = movie.title

//                         // const discription = document.createElement('div')
//                         // discription.setAttribute('class', 'discript')
//                         // discription.textContent = 'Dummy Discription'

//                         movieCard.appendChild(moviePoster)
//                         movieCard.appendChild(movieTitle)
//                         // movieCard.appendChild(discription)

//                         document.getElementById('all-movies').appendChild(movieCard)
                    
//                     })


//                 })
// }

// returnMovies(APILINK)

// const searchMovie = (movie) => {
//     console.log(movie)
// }



// document.getElementById('search2').addEventListener('submit', (event) => {
//     event.preventDefault()
//     console.log(SEARCHPATH + document.getElementById('search').value + '"')
// })