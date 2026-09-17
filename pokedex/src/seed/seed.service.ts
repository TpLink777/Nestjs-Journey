
import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { PokeResponse } from './interfaces/poke-response.interface.js';
import { Pokemon } from '../pokemon/entities/pokemon.entity.js';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';


@Injectable()
export class SeedService {

  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonRepository : Model<Pokemon>
  ){}


  //! propiedad / atributo
  private readonly axios: AxiosInstance = axios


  //! Metodo asincrono
  async executeSeedService(numberLimit: number) {
    const { data } = await this.axios.get<PokeResponse>(`https://pokeapi.co/api/v2/pokemon?limit=${numberLimit}`)

    data.results.forEach(async ({ name, url }) => {

      const segments = url.split('/')
      const pokenum: number = +segments[ segments.length - 2 ]

      await this.pokemonRepository.create({ name, pokenum })
    })

    return "Seed executed successfully!"
  }


}
