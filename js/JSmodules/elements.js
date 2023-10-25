

export default function CreateElements({
    Connection
}){
    const bgDark = document.querySelector('.bg-dark')
    const secaoFilmes = document.querySelector('.secao')
    const firstInput = document.querySelector('#first-input')
    const seccondInput = document.querySelector('#scnd-input')
    const buttonSendScndInput = document.querySelector('#second-search-button')
    const butonSendFirstInput = document.querySelector('#first-search-film')
    const buttonClosesCard = document.querySelector('#closes-card')
    const elementosPagina = []

    const connection = new Connection()

    return {
        bgDark,
        connection,
        secaoFilmes,
        firstInput,
        seccondInput,
        buttonSendScndInput,
        butonSendFirstInput,
        buttonClosesCard,
        elementosPagina,

    }
}

