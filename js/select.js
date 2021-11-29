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
        }
    });
}