
import { Injectable } from '@nestjs/common';
import { AnimalsService } from '../animals/animals.service.js';
import { SpeciesService } from '../species/species.service.js';
import { ANIMALS_SEED } from './data/animals.seed.js';
import { SPECIES_SEED } from './data/species.seed.js';

@Injectable()
export class SeedService {

  constructor(
    private readonly animalsService: AnimalsService,
    private readonly speciesService: SpeciesService
  ){}

  populateDB() {

    // acciones para llenar la dato de los arreglos al instante
    this.animalsService.fillAnimalsWithSeedData(ANIMALS_SEED)
    this.speciesService.fillSpecisWithSeedData(SPECIES_SEED)

    return {
      status: 200,
      message: 'Seed ejecutado exitosamente'
    }
  }
}
