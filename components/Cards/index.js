// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.


axios.get(`https://lambda-times-backend.herokuapp.com/articles`)
.then(response => {
    console.log(response.data.articles.javascript)
        response.data.articles.javascript.forEach(e => {
            document.querySelector('.cards-container').appendChild(articleCards(e))
    })
    response.data.articles.bootstrap.forEach(e => {
            document.querySelector('.cards-container').appendChild(articleCards(e))
    })
    response.data.articles.technology.forEach(e => {
            document.querySelector('.cards-container').appendChild(articleCards(e))
    })
    response.data.articles.jquery.forEach(e => {
            document.querySelector('.cards-container').appendChild(articleCards(e))
    })
    response.data.articles.node.forEach(e => {
            document.querySelector('.cards-container').appendChild(articleCards(e))
    })
})
.catch(error => {
    console.log('whoops', error)
})

function articleCards(info) {
    const card = document.createElement('div')
        const headline = document.createElement('div')
        const author = document.createElement('div')
            const imgContainer = document.createElement('div')
                const img = document.createElement('img')
            const authName = document.createElement('span')

    card.appendChild(headline)
    card.appendChild(author)
    author.appendChild(imgContainer)
    imgContainer.appendChild(img)
    author.appendChild(authName)

    card.classList.add('card')
    headline.classList.add('headline')
    author.classList.add('author')
    imgContainer.classList.add('img-container')

    headline.textContent = info.headline
    
    img.src = info.authorPhoto

    authName.textContent = info.authorName

    return card
}


// if (response.data.articles.javascript){

    // } else if (response.data.articles.bootstrap){
    //     console.log(response.data.articles.bootstrap)
    //     cardsContainer.appendChild(articleCards(response.data.articles.bootstrap))
    // } else if (response.data.articles.technology){
    //     console.log(response.data.articles.technology)
    //     cardsContainer.appendChild(articleCards(response.data.articles.technology))
    // } else if (response.data.articles.jquery){
    //     console.log(response.data.articles.jquery)
    //     cardsContainer.appendChild(articleCards(response.data.articles.jquery))
    // } else if (response.data.articles.node){
    //     console.log(response.data.articles.node)
    //     cardsContainer.appendChild(articleCards(response.data.articles.node))
    // }