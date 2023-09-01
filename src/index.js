import RickAndMortyService from './service.js';

const characterList = document.getElementById("character-list");
const service = new RickAndMortyService();

function createCharacterCard(character) {
    return `
        <article class="tarjeta">
            <div class="imagen">
            <img
                src="${character.image}" alt="${character.name}"
            />
            </div>
            <div class="contenedor">
            <div class="carta">
                <h2>${character.name}</h2>
                <span class="status"
                ><span class="status__icon_${character.status}"></span>${character.status}</span
                >
            </div>
            <div class="carta">
                <span class="text-gray">Last known location:</span>
                <span class="text-white">${character.location}</span>
            </div>
            <div class="carta">
                <span class="text-gray">First seen in:</span>
                <span class="text-white">${character.firstSeen}</span>
            </div>
            </div>
        </article>
    `;
}

function createCharacterList() {
    service.getAllCharacters()
        .then(characters => {
            const characterCards = characters.map(character => createCharacterCard(character));
            characterList.innerHTML = characterCards.join('');
            addCharacterListeners();
        })
}

function addCharacterListeners(character) {
    const characterElement = document.querySelector(`#${character.id}`);
    characterElement.addEventListener('click', () => {
        console.log(`Hola, soy ${character.name}`);
    });
}

createCharacterList();