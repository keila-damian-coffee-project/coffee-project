"use strict"

function renderCoffee(coffee) {
    let html = `
        <div class="col-3">
            <div class="card coffee">
                <img src="img/cyberpunk-border.png" class="card-background" alt="card background" />
                <img src="img/bnsneon.jpeg" class="card-img-top relative">
                <h5 class="card-title relative">${coffee.name}</h5>
                <p class="card-text relative">${coffee.roast}</p>
               
       
            </div>
        </div>
    `;

    return html;
}

function renderCoffees(coffees) {
    let html = '';
    // TODO: Change this for loop to go in ACS order
    for(let i = 0; i < coffees.length;i += 1) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    let selectedRoast = roastSelection.value;
    let searchValue = searchInput.value.trim().toLowerCase(); // Get the search term and convert to lowercase
    let filteredCoffees = [];
    coffees.forEach(function (coffee) {
        if(coffee.name.toLowerCase().includes(searchValue) && selectedRoast === "all"){
            filteredCoffees.push(coffee);
        } else if (coffee.roast === selectedRoast && coffee.name.toLowerCase().includes(searchValue)) {
                filteredCoffees.push(coffee);

        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
let coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

// add coffees
function addCoffees(e) {
    e.preventDefault();
    //capturing select input
    let coffeeType = document.querySelector('#roast-selection-add-coffee').value;
    //capturing typed input
    let coffeeName = document.querySelector('#coffee-name-add-coffee').value;
    //creating new object from input
    const newCoffee = {id: 15, name: coffeeName, roast: coffeeType}
    //pushed new object to original array
    coffees.push(newCoffee);
    // run renderCoffees with updated array
    renderCoffees(coffees);
}

let tbody = document.querySelector('#coffees');
let submitButton = document.querySelector('#submit');
let roastSelection = document.querySelector('#roast-selection');
let searchInput = document.querySelector("#coffee-name")
let addCoffee = document.querySelector('#submit-add-coffee');

tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);
searchInput.addEventListener("input", updateCoffees)
addCoffee.addEventListener("click", addCoffees);


            // Sound if we use it
let currentlyPlayingSound = false
// document.querySelector('body').addEventListener('click', function(e){
//     if (!currentlyPlayingSound) {
//         currentlyPlayingSound = true;
//         let audioObject = new Audio('./audio/baby-shark.mp3').play();
//         audioObject.addEventListener("ended", function(){
//             currentlyPlayingSound = false;
//         });
//     }
// });
