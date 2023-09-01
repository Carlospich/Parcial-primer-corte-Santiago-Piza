class RickAndMortyService {
    constructor() {
        this.url = 'https://rickandmortyapi.com/api/';
    }

    async getAllCharacters() {
        try {
            const response = await fetch("https://rickandmortyapi.com/api/character");
            const data = await response.json();

            const characters = data.results.map(character => ({
                name: character.name,
                status: character.status,
                species: character.species,
                firstSeen: character.origin.name,
                location: character.location.name,
                image: character.image,
                student: "Carlos Santiago Piza Choachi",
                code: "0000227586",
            }));

            return characters;
        } catch (error) {
            throw error;
        }
    }
}

export default RickAndMortyService;