/**
 * `https://www.omdbapi.com/?t=${film_title}&apikey=7abd26f8`
 */



const secaoFilmes = document.querySelector('.secao')
const firstInput = document.querySelector('#first-input')
const butonSendFirstInput = document.querySelector('#first-search-film')
const buttonClosesCard = document.querySelector('#closes-card')
import { Connection } from "./connectionAPI.js";

const connection = new Connection()

const elemento = await connection.create(`https://www.omdbapi.com/?t=avengers&apikey=7abd26f8`)

const elementosPagina = []

butonSendFirstInput.addEventListener('click', searchFilm)

buttonClosesCard.addEventListener('click', ()=>{
    document.querySelector('.card-film').classList.add('hide')
})
document.addEventListener('keyup', (keycode)=>{
    if(keycode.key == 'Escape'){
        document.querySelector('.card-film').classList.add('hide')
    }
})

async function searchFilm(event){
    event.preventDefault()
    const title = String(firstInput.value)
    const endpoint = `https://www.omdbapi.com/?t=${title}}&apikey=7abd26f8`
    const searchedFilm = await fetch(endpoint)
    .then(data => data.json())
    console.log(searchedFilm)
    const cardFilm = document.querySelector('.card-film')

    cardFilm.querySelector('img').src = `${searchedFilm.Poster}`
    cardFilm.querySelector('h1').textContent = `${searchedFilm.Title}`
    cardFilm.querySelector('p').textContent = `${searchedFilm.Plot}`
    cardFilm.querySelector('span').textContent = `Duração: ${searchedFilm.Runtime}`

    cardFilm.classList.remove(`hide`)
    
}  

elementosPagina.push(await connection.create(`https://www.omdbapi.com/?s=film&apikey=7abd26f8`))

const exibitionFilms =  elementosPagina.map((element) =>{ 
    return element.Search.map(ele => {
        return ele
    })
} )


const exibicao = function exibitionOfMainFilms(){
    for(let j = 0; j < 10; j++){
        const element = document.createElement('div')

        element.className = 'card'
        element.innerHTML = `
            <img src="${exibitionFilms[0][j].Poster}" alt="imgem do filme : ${exibitionFilms[0][j].Title}">
            <div class="info">
                <h2>${exibitionFilms[0][j].Title}</h2>
                <p>${exibitionFilms[0][j].Type}
                </p>
                <span>${exibitionFilms[0][j].Year}</span>
            </div>
            <button class="more-info">Saiba mais</button>         
        `
        secaoFilmes.append(element)
    }
}

exibicao()



