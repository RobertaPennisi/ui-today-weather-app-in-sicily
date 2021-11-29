const render = (wrapper, content) => wrapper.innerHTML = content;

const createCardsList = (data) => {
    
    const cards = data
        .map(item =>
            `<li>
                <div class="basic_info">
                    <div class="icon">
                        <img src="http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png">
                    </div>
                    <div class="info">
                        <h3>${item.name}</h3>
                        <p>${item.main.temp}° | ${item.weather[0].main}</p>
                    </div>
                </div>
                <div class="advanced_info">
                    <p>Perceived: ${item.main.feels_like}°</p>
                    <p>Min: ${item.main.temp_min}°</p>
                    <p>Max: ${item.main.temp_max}°</p>
                </div>
            </li>`)
        .join('');

    const wrapperCards = document.querySelector('.wrapper__cards');

    render(wrapperCards, 
        `<h2>Provinces List</h2>
        <ul class="list__cards">${cards}</ul>`
    );
};

export {
    createCardsList
}