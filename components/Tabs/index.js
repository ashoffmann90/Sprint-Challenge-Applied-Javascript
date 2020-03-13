// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

// const tabData = response.data.topics;
//     tabData.forEach(e => {
//       document.querySelector(".topics").appendChild(tabCreation(e));

axios.get(`https://lambda-times-backend.herokuapp.com/topics`)
.then(response => {
    response.data.topics.forEach( info => {
        console.log(response.data.topics)
        document.querySelector('.topics').appendChild(Tab(response.data.topics))
    })
})
.catch(error => {
    console.log('I made an oopsie', error)
})

function Tab(info){
    const tab = document.createElement('div')
    tab.classList.add('tab')
    tab.textContent = info.topics //maybe need `${}`?

    return tab
}




