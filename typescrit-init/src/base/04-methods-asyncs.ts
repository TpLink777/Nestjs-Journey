
//! ejemplo de un llamado a una API de manera asincrona con tipos de datos

import axios from "axios"
import type { PokeApiResponse, Move } from "../interface/pokeapi-response.interface"

class PokeApiExample {

    constructor(
        public readonly id: number
    ) { }


    async getDataPokemon(): Promise<Move[]> {
        const { data } = await axios.get<PokeApiResponse>(`https://pokeapi.co/api/v2/pokemon/${this.id}`)

        console.log( data.moves )

        return data.moves
    }

}

export const Charmander = new PokeApiExample(4)
Charmander.getDataPokemon()