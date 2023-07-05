"use strict"

function renderCoffee(coffee) {
    let html = '<div class="coffee">';
    html += '<header>' + coffee.name + '</header>';
    html += '<p>' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    let html = '';
    for (let i = coffees.length - 1; i >= 0; i--) {
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
        if (coffee.roast === selectedRoast && coffee.name.toLowerCase().includes(searchValue)) {
            filteredCoffees.push(coffee);
        } else if (coffee.roast.toLowerCase().includes(searchValue) || roastSelection === "all"){
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
//
// let all = reversedCoffees();
// function reversedCoffees(array) {
//
//     return coffees.reverse('[]');
// }
// // // checking functionality
// let all = reversedCoffees();

// function myFunction(element) {
//
// }

            // our function for trying to get the string from the array of objects
// function returnTyped (coffees) {
//     let userInput = ''
//     const typedCoffees = [];
//     for(let i = 0; i < coffees.length;i += 1) {
//         if(coffees[i].roast === userInput.toLowerCase();
//
//     }
// }



let tbody = document.querySelector('#coffees');
let submitButton = document.querySelector('#submit');
let roastSelection = document.querySelector('#roast-selection');
let searchInput = document.querySelector("#coffee-name")

tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);
searchInput.addEventListener("input", updateCoffees)

