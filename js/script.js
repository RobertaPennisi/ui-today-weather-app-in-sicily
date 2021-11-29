import { APIendpoints } from "./data.js";
import { createCardsList } from "./render.js";



const loadCards = () => {
    APIendpoints.map( item =>
        fetch(item)
            .then(response => response.json())
            .then(data => {
                // console.log(data); 
                cities.push(data); 
                createCardsList(cities);
            })
    );
};

const cities = [];


document.addEventListener("DOMContentLoaded", loadCards());


