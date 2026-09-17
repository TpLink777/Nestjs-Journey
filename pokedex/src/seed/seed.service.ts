
import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { PokeResponse } from './interfaces/poke-response.interface.js';


@Injectable()
export class SeedService {

  //! propiedad / atributo
  private readonly axios: AxiosInstance = axios


  //! Metodo asincrono
  async executeSeedService(numberLimit: number) {
    const { data } = await this.axios.get<PokeResponse>(`https://pokeapi.co/api/v2/pokemon?limit=${numberLimit}`)

    data.results.forEach(({ name, url }) => {

      const segments = url.split('/')
      const pokenum: number = +segments[ segments.length - 2 ]

      return name + pokenum
    })



    return data.results
  }


}
