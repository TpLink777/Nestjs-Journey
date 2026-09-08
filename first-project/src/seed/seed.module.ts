import { Module } from '@nestjs/common';
import { SeedService } from './seed.service.js';
import { SeedController } from './seed.controller.js';
import { AnimalsModule } from '../animals/animals.module.js';
import { SpeciesModule } from '../species/species.module.js';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [ AnimalsModule, SpeciesModule ]
})
export class SeedModule {}
