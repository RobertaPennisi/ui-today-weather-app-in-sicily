const render = (wrapper, content) => wrapper.innerHTML = content;

const createCardsList = (data) => {
    
    const cards = data
        .map(item =>
            `<li>
                <p>${item.name}</p>
            </li>`)
        .join('');

    const wrapperCards = document.querySelector('.wrapper__cards');

    render(wrapperCards, 
        `<h2>Provinces List</h2>
        <ul>${cards}</ul>`
    );
};

export {
    createCardsList
}