
import { Injectable } from '@nestjs/common';
import { PokeResponse } from './interfaces/poke-response.interface.js';
import { Pokemon } from '../pokemon/entities/pokemon.entity.js';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { PokemonInstance } from './interfaces/poke-intsnace.interface.js';
import { AxiosAdapter } from '../common/adapters/axios.adpter.js';

@Injectable()
export class SeedService {

  constructor(
    //! Inyeccion del modelo de Pokemon
    @InjectModel(Pokemon.name)
    private readonly pokemonRepository: Model<Pokemon>,
    private readonly http: AxiosAdapter

  ) { }


  //! Metodo con la logica del Seed
  async executeSeedService(numsPokemons: number) {

    await this.pokemonRepository.deleteMany()

    const data  = await this.http.get<PokeResponse>( //! respuesta de Axios tipada como PokeResponse
      ` https://pokeapi.co/api/v2/pokemon?limit=${numsPokemons}`
    )

    const pokemonsToInstance: PokemonInstance[] = [] //! Array para almacenar los pokemons a insertar en la base de datos

    data.results.forEach(({ name, url }) => {

      //! Extraer el número del Pokémon de la URL
      const segments = url.split('/')
      const pokenum = +segments[segments.length - 2]

      //! Agregar el Pokémon a la lista de pokemons a insertar
      pokemonsToInstance.push({ name, pokenum })

    })

    //! Insertar los pokemons en la base de datos
    await this.pokemonRepository.insertMany(pokemonsToInstance)

    return "Seed executed successfully"

  }
}
