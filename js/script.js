import { APIendpoints } from "./data.js";
import { createCardsList } from "./render.js";
import { showSelectedCity } from "./select.js";



const loadCards = () => {
    APIendpoints.map( item =>
        fetch(item)
            .then(response => response.json())
            .then(data => {
                cities.push(data); 
                createCardsList(cities);
            })
    );
};

export const cities = [];
const date = new Date();
document.getElementById('today').textContent = date.toDateString();

document.addEventListener("DOMContentLoaded", () =>{
    loadCards();
    showSelectedCity(cities);
});


