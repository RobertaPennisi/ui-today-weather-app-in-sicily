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


document.addEventListener("DOMContentLoaded", () =>{
    loadCards();
    showSelectedCity(cities);
});


