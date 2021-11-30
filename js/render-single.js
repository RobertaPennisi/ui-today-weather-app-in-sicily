import { render } from "./render.js";

const createSingleCard = (data) => {
    
    const singleCardTemplate = data
        .map(item =>
            `
            <section class="single-city-recap">
                <div class="basic_info">
                    <div class="icon">
                        <img src="http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png">
                    </div>
                    <div class="info">
                        <h3>${item.name}</h3>
                        <p><span>${item.main.temp}° | </span> ${item.weather[0].main}</p>
                    </div>
                </div>
            </section>
            <section class="single-city-temp-wind">
                <div class="advanced_info">
                    <p>Perceived: ${item.main.feels_like}°</p>
                    <p><i class="fas fa-temperature-low"></i> Min: ${item.main.temp_min}°</p>
                    <p><i class="fas fa-temperature-high"></i> Max: ${item.main.temp_max}°</p>
                </div>
            </section>
            `)
        .join('');    
            
    render(wrapperCards, 
        `<div>${singleCardTemplate}<div>`
    );
};

const wrapperCards = document.querySelector('.wrapper__cards');

export {
    createSingleCard
}