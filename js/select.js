import { createCardsList } from "./render.js";
import { cities } from "./script.js";

export const showSelectedCity = (data) => {
    const select = document.getElementById('select-cities');
    
    select.addEventListener('change', (event) => {
        let selectedCity = event.target.value;

        const result = data.filter((element) => 
            element.name.toLowerCase().search(selectedCity) > -1)
        
        createCardsList(result);
        
        if (selectedCity === "all") {
            createCardsList(cities);
            document.getElementById('2525763').classList.add('agrigento');
            document.getElementById('2525068').classList.add('catania');
            document.getElementById('2523918').classList.add('palermo');
            document.getElementById('2523082').classList.add('siracusa');
            document.getElementById('2525447').classList.add('caltanissetta');
            document.getElementById('2524170').classList.add('messina');
            document.getElementById('2524819').classList.add('enna');
            document.getElementById('2523649').classList.add('ragusa');
            document.getElementById('2522875').classList.add('trapani');   
        }
    });
}