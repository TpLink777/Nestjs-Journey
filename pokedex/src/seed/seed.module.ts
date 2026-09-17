import { Module } from '@nestjs/common';
import { SeedService } from './seed.service.js';
import { SeedController } from './seed.controller.js';
import { PokemonModule } from '../pokemon/pokemon.module.js';
import { CommonModule } from '../common/common.module.js';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [PokemonModule, CommonModule]
})
export class SeedModule {}
