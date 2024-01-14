// get the ramen-menu div
const ramenMenu = document.getElementById('ramen-menu');
//HTML DOM NODE Elements
const ramenDetailImage = document.querySelector('.detail-image')
const ramenDetailName = document.querySelector('.name')
const ramenDetailRestaurant = document.querySelector('.restaurant')
const ramenDetailRating = document.querySelector('#rating-display')
const ramenDetailComment = document.querySelector('#comment-display')

//new ramen form
ramenForm = document.querySelector('#new-ramen')
const newRamenName = document.querySelector('#new-ramen')
const newRamenRestaurant = document.querySelector('#new-restaurant')
const newRamenImage = document.querySelector('#new-image')
const newRamenRating = document.querySelector('#new-rating')
const newRamenComment = document.querySelector('#new-comment')

//url
const url = "http://localhost:3000/ramens"

// Fetch ramens from the server
fetch(url)
    .then(response => response.json())
    .then(ramenData => {
        ramenData.map(eachRamen => {
            displayRamenMenu(eachRamen)
        })

    })
const displayRamenMenu = (ramen) => {
    const ramenImg = document.createElement('img')
    //my image source will be the ramen's image in my db
    ramenImg.src = ramen.image
    //apending my iterated pulled ramen images to my header via my ramenMenu
    ramenMenu.appendChild(ramenImg)
    //event listner for clicked ramen
    ramenImg.addEventListener('click', () => {
        //this will callback my next function
        displayDetail(ramen)
    })
}

const displayDetail = (ramen) => {
    //the display needs to be filled in by what we click
    //1. image
    ramenDetailImage.src = ramen.image
    //2. name
    ramenDetailName.textContent = ramen.name
    //3. restaurant
    ramenDetailRestaurant.innerText = ramen.restaurant
    //4. rating
    ramenDetailRating.textContent = ramen.rating
    //5. comment
    ramenDetailComment.textContent = ramen.comment
}

// set an E.Listener on my form
ramenForm.addEventListener('submit', (event) => {
    event.preventDefault()
    console.log("New Ramen Has Been Submitted!", event)
    let newRamen = {
        "name": event.target["new-name"].value,
        "restaurant": event.target["new-restaurant"].value,
        "image": event.target["new-image"].value,
        "rating": event.target["new-rating"].value,
        "comment": event.target["new-comment"].value
    }
    //reuse the previous code for displaying the menu with the new code
    displayRamenMenu(newRamen)
})