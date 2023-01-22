// THE MOVIE DATABASE API
// Cheetah's Movies sección, una sección peculiar en la cuál los usuarios podrán acceder a las películas más populares del momento.

const apiKey = "357fb3f0bddb83b7164de3826686edaa"
const contenedor = document.querySelector(".contenedor-movies")

let paginado = 1

const cards = (array) => {
    const nodos = array.reduce((acc, element) => {
        return acc + `
        <a href="#">
        <img class="imgcard-movies" src="https://image.tmdb.org/t/p/original${element.poster_path}" alt=${element.title}>
        </a>
        `
    }, "")
    contenedor.innerHTML = nodos
}

fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=${paginado}`)
.then( res => res.json())
.then( data => { 
    console.log(data)
    cards(data.results)
})


document.querySelector("form").onsubmit = (e) => {
    e.preventDefault()
    fetch(`https://api.themoviedb.org/3/search/movie?query=${document.querySelector("#busqueda").value}&api_key=${apiKey}&language=es-ES&page${paginado}1&include_adult=false`)
    .then( res => res.json())
    .then( data => { 
    console.log(data)
    cards(data.results)
})
}


document.querySelector("#next").onclick = () => {

    if( paginado !== 500){
        paginado++
        document.querySelector("#next").disabled = false
    } else if ( paginado === 500){
        document.querySelector("#next").disabled = true
    }

    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=${paginado}`)
    .then( res => res.json())
    .then( data => { 
    console.log(data)
    cards(data.results)
    })
}

document.querySelector("#prev").onclick = () => {

    if( paginado !== 1){
        paginado--
        document.querySelector("#prev").disabled = false
    } else if ( paginado === 1){
        document.querySelector("#prev").disabled = true
    } 

    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=${paginado}`)
    .then( res => res.json())
    .then( data => { 
    console.log(data)
    cards(data.results)
    })
}

/* const imagentmbd = `https://image.tmdb.org/t/p/original${imagen}` */