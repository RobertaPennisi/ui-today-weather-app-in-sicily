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
                
                setTimeout(() => {
                    document.getElementById('2525763').classList.add('agrigento');
                    document.getElementById('2525068').classList.add('catania');
                    document.getElementById('2523918').classList.add('palermo');
                    document.getElementById('2523082').classList.add('siracusa');
                    document.getElementById('2525447').classList.add('caltanissetta');
                    document.getElementById('2524170').classList.add('messina');
                    document.getElementById('2524819').classList.add('enna');
                    document.getElementById('2523649').classList.add('ragusa');
                    document.getElementById('2522875').classList.add('trapani');
                }, 300);
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


