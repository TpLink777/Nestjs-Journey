
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSpeciesDto, UpdateSpeciesDto } from './dto/index.js';
import { Species } from './entities/species.entity.js';
import { v4 as uuid } from 'uuid'

@Injectable()
export class SpeciesService {

  private species: Species[] = []

  findAll() {
    return this.species
  }

  findOne(id: string) {
    const Specie = this.species.find(s => s.id === id)

    if (!Specie)
      throw new NotFoundException(`La especia con el id ${id} no fu encontrada`)

    return Specie
  }

  create(createSpeciesDto: CreateSpeciesDto) {

    const newSpecie: Species = {
      id: uuid(),
      ...createSpeciesDto,
      createdAt: new Date().toLocaleDateString('es-CO')
    }

    this.species.push(newSpecie)

    return {
      status: 201,
      message: "Nueva especie creada con exito",
      newSpecie
    }

  }

  update(id: string, updateSpeciesDto: UpdateSpeciesDto) {
    let specie = this.findOne(id)

    this.species = this.species.map(sp => {
      if (sp.id === id) {
        specie = {
          ...specie,
          ...updateSpeciesDto,
          updatedAt: new Date().toLocaleDateString('es-CO')
        }
        return specie
      }
      return sp
    })

    return {
      status: 200,
      message: "Especie actualizada exitosamente",
      specie
    }
  }

  remove(id: string) {
    this.findOne(id)

    this.species.filter(s => s.id !== id)

    return {
      status: 200,
      message: `Especie con id ${id} a sido eliminada con exito`
    }
  }

  fillSpecisWithSeedData(speciesData: Species[]) {
    this.species = speciesData
  }

}
