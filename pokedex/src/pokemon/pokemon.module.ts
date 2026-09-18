
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { PokemonService } from './pokemon.service.js';
import { PokemonController } from './pokemon.controller.js';
import { Pokemon, PokemonSchema } from './entities/pokemon.entity.js';

@Module({
  controllers: [PokemonController],
  providers: [PokemonService],
  imports: [
    MongooseModule.forFeature([ //! Registra un modelo de Mongoose en Nest, para poder inyectarlo y usarlo.
      {
        name: Pokemon.name,
        schema: PokemonSchema
      }
    ])
  ],
  exports: [MongooseModule]
})
export class PokemonModule { }
