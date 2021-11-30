const render = (wrapper, content) => wrapper.innerHTML = content;

const createCardsList = (data) => {
    
    const cards = data
        .map(item =>
            `<li id="${item.id}">
                <div class="basic_info">
                    <div class="icon">
                        <img src="http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png">
                    </div>
                    <div class="info">
                        <h3>${item.name}</h3>
                        <p><span>${item.main.temp}° | </span> ${item.weather[0].main}</p>
                    </div>
                </div>
                <div class="advanced_info">
                    <p>Perceived: ${item.main.feels_like}°</p>
                    <p><i class="fas fa-temperature-low"></i> Min: ${item.main.temp_min}°</p>
                    <p><i class="fas fa-temperature-high"></i> Max: ${item.main.temp_max}°</p>
                </div>
            </li>`)
        .join('');    
            
    render(wrapperCards, 
        `<ul class="list__cards">${cards}</ul>`
    );
};

const wrapperCards = document.querySelector('.wrapper__cards');

export {
    createCardsList
}