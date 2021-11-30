import { render } from "./render.js";

const createSingleCard = (data) => {
    
    const singleCardTemplate = data
        .map(item =>
            `
            <section class="single-city-recap">
                
                    <div class="recap-left ${item.id}">
                        <h3>${item.name}</h3>
                        <p>Lon: ${item.coord.lon} Lat: ${item.coord.lat}</p>
                    </div>
                    <div class="recap-right">
                        <span>
                        <img src="http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png">
                        <p> | ${item.main.temp}°</p>
                        </span>
                        <ul>
                            <li>Description: ${item.weather[0].description}</li>
                            <li>Pressure: ${item.main.pressure || 'N.F.'} Pa</li>
                            <li>Humidity: ${item.main.humidity || 'N.F.'}%</li>
                            <li>Sea level: ${item.main.sea_level || 'N.F.'} cm</li>
                            <li>Visibility: ${item.visibility || 'N.F.'} cm</li>
                        </ul>
                    </div>
                
            </section>
            <section class="single-city-temp-wind">
                
                    <p>Perceived:<br> <span><i class="fas fa-temperature-low"></i> ${item.main.feels_like}°</span></p>
                    <p>Min:<br> <span><i class="fas fa-temperature-low"></i>  ${item.main.temp_min}°</span></p>
                    <p>Max:<br> <span><i class="fas fa-temperature-high"></i>  ${item.main.temp_max}°</span></p>
                    <p>Wind:<br><span><i class="fas fa-wind"></i> ${item.wind.speed} </span></p>
                
            </section>
            `)
        .join('');    
            
    render(wrapperCards, 
        `<div class ="wrapper_single_card">${singleCardTemplate}<div>`
    );
    
};

const wrapperCards = document.querySelector('.wrapper__cards');

export {
    createSingleCard
}