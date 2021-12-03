import { render } from "./render.js";

const createCardSearched = (data) => {
    render(wrapperSearch, 
        `
        <div class="basic_info">
            <div class="icon">
                <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">
            </div>
            <div class="info">
                <h3>${data.name} | ${data.main.temp}° | ${data.weather[0].main}</h3>
                <p>Description: ${data.weather[0].description}</p>
                <p>Pressure: ${data.main.pressure || 'N.F.'} Pa | Humidity: ${data.main.humidity || 'N.F.'}%</p>
                <p>Sea level: ${data.main.sea_level || 'N.F.'} cm | Visibility: ${data.visibility || 'N.F.'} cm</p>
            </div>
        </div>
        <section class="single-city-temp-wind">
                
                    <p>Perceived:<br> <span><i class="fas fa-temperature-low"></i> ${data.main.feels_like}°</span></p>
                    <p>Min:<br> <span><i class="fas fa-temperature-low"></i>  ${data.main.temp_min}°</span></p>
                    <p>Max:<br> <span><i class="fas fa-temperature-high"></i>  ${data.main.temp_max}°</span></p>
                    <p>Wind:<br><span><i class="fas fa-wind"></i> ${data.wind.speed} </span></p>
                
            </section>
        `
    );
};


const wrapperSearch = document.querySelector('.wrapper__search');

export {
    createCardSearched
}