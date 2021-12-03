import { APIendpoints } from "./data.js";
import { createCardsList } from "./render.js";
import { showSelectedCity } from "./select.js";
import { createCardSearched } from "./render-global.js";



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

const loadGlobalSearch = (city) => {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=f510205af3c2d79e1d719d64b4e105a2")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            createCardSearched(data)
        })
}

export const cities = [];
const date = new Date();
document.getElementById('today').textContent = date.toDateString();
const formSearch = document.querySelector("#search-global");

document.addEventListener("DOMContentLoaded", () =>{
    loadCards();
    showSelectedCity(cities);
});

formSearch.addEventListener('submit', (event) => {
    event.preventDefault();
    let searchedCity = event.target.search.value;
    console.log(searchedCity)
    loadGlobalSearch(searchedCity.toLowerCase())
})

