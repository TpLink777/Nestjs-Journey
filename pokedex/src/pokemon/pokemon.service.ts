
import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { isValidObjectId, Model } from 'mongoose';

import { Pokemon } from './entities/pokemon.entity.js';
import { CreatePokemonDto } from './dto/create-pokemon.dto.js';
import { UpdatePokemonDto } from './dto/update-pokemon.dto.js';

@Injectable()
export class PokemonService {

  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonRepository: Model<Pokemon>
  ) { }


  private handleExceptions(err: any) {

    if (err.code === 11000) {
      throw new BadRequestException(`El pokemon numero ${JSON.stringify(err.keyValue.pokenum)} ya existe en la bd`)
    }
    throw new InternalServerErrorException(`No se pudo crear el Pokemon, revisa los Logs del servidor`)
  }



  async findAll() {
    return await this.pokemonRepository.find()
  }


  async findOne(term: string) {

    let pokemon: Pokemon | null = null

    if (!isNaN(+term)) {
      pokemon = await this.pokemonRepository.findOne({ pokenum: +term })
    }

    if (!pokemon && isValidObjectId(term)) {
      pokemon = await this.pokemonRepository.findById(term)
    }

    if (!pokemon) {
      pokemon = await this.pokemonRepository.findOne({
        name: term.toLowerCase()
      })
    }

    if (!pokemon) {
      throw new NotFoundException(
        `El pokemon con la busqueda ${term} no fue encontrado`
      )
    }

    return pokemon
  }

  async create(createPokemonDto: CreatePokemonDto) {
    try {

      const pokemon = await this.pokemonRepository.create({
        name: createPokemonDto.name.toLocaleLowerCase(),
        pokenum: createPokemonDto.pokenum,
      })

      return pokemon

    } catch (e: any) {
      this.handleExceptions(e)
    }
  }

  async update(term: string, updatePokemonDto: UpdatePokemonDto) {
    try {

      const pokemon = await this.findOne(term)

      if (updatePokemonDto.name)
        updatePokemonDto.name = updatePokemonDto.name.toLowerCase()

      Object.assign(pokemon, updatePokemonDto)

      await pokemon.save()

      return pokemon

    } catch (e: any) {
      this.handleExceptions(e)
    }

  }

  async remove(id: string) {
    const { deletedCount } = await this.pokemonRepository.deleteOne({ _id: id })

    if (deletedCount === 0)
      throw new BadRequestException(`Pokemon con id "${id}" no encontrado`)

    return {
      message: 'Pokemon eliminado correctamente'
    }
  }


}
