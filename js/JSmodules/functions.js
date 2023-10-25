export function JSfunctions({
    HTMLElements
}){

    async function searchFilm(event){
        event.preventDefault()
        let letras = String(HTMLElements.firstInput.value) 
        if(letras =='')letras = String(HTMLElements.seccondInput.value)
        const title = letras
        const endpoint = `https://www.omdbapi.com/?t=${title}&apikey=7abd26f8`
        const searchedFilm = await fetch(endpoint)
        .then(data => data.json())
        console.log(searchedFilm)
        const cardFilm = document.querySelector('.card-film')
    
        cardFilm.querySelector('img').src = `${searchedFilm.Poster}`
        cardFilm.querySelector('h1').textContent = `${searchedFilm.Title}`
        cardFilm.querySelector('p').textContent = `${searchedFilm.Plot}`
        cardFilm.querySelector('#released').textContent = `${searchedFilm.Released}`
        cardFilm.querySelector('span').textContent = `${searchedFilm.Runtime}`
    
        cardFilm.classList.remove(`hide`)
        document.querySelector('.bg-dark').classList.remove('hide')
    }  
    
    function exibitionOfMainFilms({ exibitionFilms}){
        for(let j = 0; j < 10; j++){
            const element = document.createElement('div')
    
            element.className = 'card'
            element.innerHTML = `
                <img src="${exibitionFilms[j].Poster}" alt="imgem do filme : ${exibitionFilms[j].Title}">
                <div class="info">
                    <h2>${exibitionFilms[j].Title}</h2>
                    <p>${exibitionFilms[j].Type}
                    </p>
                    <span>${exibitionFilms[j].Year}</span>
                </div>
                <button class="more-info">Saiba mais</button>         
            `
            HTMLElements.secaoFilmes.append(element)
        }
    }
    function atClickOutSideOfDivCard(){
        document.querySelector('.card-film').classList.add('hide')
        document.querySelector('.bg-dark').classList.add('hide')
    }
    function closeCardModalAtEsc(keycode){
        if(keycode.key == 'Escape'){
            document.querySelector('.card-film').classList.add('hide')
            document.querySelector('.bg-dark').classList.add('hide')
        }
    } 
    
    function closeCardModalAtButtonCloses(){
        document.querySelector('.card-film').classList.add('hide')
        document.querySelector('.bg-dark').classList.add('hide')

    }
    function clickOutSide(){
        document.querySelector('.card-film').classList.add('hide')
        document.querySelector('.bg-dark').classList.add('hide')
    }
    return {
        clickOutSide,
        atClickOutSideOfDivCard,
        closeCardModalAtButtonCloses,
        closeCardModalAtEsc,
        searchFilm,
        exibitionOfMainFilms
    }
}