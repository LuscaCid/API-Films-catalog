/**
 * `https://www.omdbapi.com/?t=${film_title}&apikey=7abd26f8`
 */

import { Connection } from "./connectionAPI.js";
import  CreateElements from './JSmodules/elements.js'
import { JSfunctions } from "./JSmodules/functions.js";
const HTMLElements = CreateElements({
    Connection
})

const jsFunctions = JSfunctions({ HTMLElements }) 

const elemento = await HTMLElements.connection.create(`https://www.omdbapi.com/?t=avengers&apikey=7abd26f8`)


HTMLElements.butonSendFirstInput.addEventListener('click', jsFunctions.searchFilm)

HTMLElements.buttonClosesCard.addEventListener('click', jsFunctions.closeCardModalAtButtonCloses)

HTMLElements.buttonSendScndInput.addEventListener('click', jsFunctions.searchFilm)

HTMLElements.bgDark.addEventListener('click', jsFunctions.clickOutSide)

document.addEventListener('keyup', jsFunctions.closeCardModalAtEsc)

const elemen = await HTMLElements.connection.create(`https://www.omdbapi.com/?s=movie&apikey=7abd26f8`)

//console.log(elemen)

const exibitionFilms = elemen.Search.map((element) =>element)

console.log(exibitionFilms[1])

jsFunctions.exibitionOfMainFilms({exibitionFilms})



