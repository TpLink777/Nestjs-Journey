
import { Move, PokeApiResponse } from "../interface/pokeapi-response.interface"
import { PokeApiAdpter, HttpAdapter } from '../api/pokeApi.adapter';


export class Pokemon {

    get imageUrl(): string {
        return `https://pokemon.com/${this.id}.jpg`;
    }

    constructor(
        public readonly id: number,
        public name: string,
        // Todo: inyectar dependencias
        public readonly http: HttpAdapter
    ) { }

    scream() {
        console.log(`${this.name.toUpperCase()}!!!`);
    }

    speak() {
        console.log(`${this.name}, ${this.name}`);
    }

    async getMoves(): Promise<Move[]> {

        const data = await this.http.get<PokeApiResponse>(`https://pokeapi.co/api/v2/pokemon/${this.id}`)

        console.log(data.moves);

        return data.moves;
    }

}
// instamcia de la clase para el llamado con axios
const pokeApi = new PokeApiAdpter()

export const charmander = new Pokemon(4, 'Charmander', pokeApi);

charmander.getMoves();