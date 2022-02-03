const message = document.querySelector('#message')
const addMovie = event => {
    event.preventDefault()
    let inputField = document.querySelector('input')
    
    
    let movie = document.createElement('li')
    
    let movieTitle = document.createElement('span')
    movieTitle.textContent = inputField.value
    movieTitle.addEventListener('click', crossOffMovie)
    movie.appendChild(movieTitle) 

    let deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'X'
    deleteBtn.addEventListener('click', deleteMovie)
    movie.appendChild(deleteBtn)

    const list = document.querySelector('ul'); 
    list.appendChild(movie)

    inputField.value = ''

}

document.querySelector('form').addEventListener('submit', addMovie)

const deleteMovie = event => {
    message.textContent = 'Movie murdered.'
    event.target.parentNode.remove()
}

const crossOffMovie = event => {
    event.target.classList.toggle('checked')
    if(event.target.classList.contains('checked') === true){
    message.textContent = "You've cheked this movie off. Go outside for a change"
    } else {
    message.textContent = "Movie added"
    }
}
