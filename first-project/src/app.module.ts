import { Module } from '@nestjs/common';
import { AnimalsModule } from './animals/animals.module.js';
import { SpeciesModule } from './species/species.module.js';
import { SeedModule } from './seed/seed.module.js';

@Module({
  imports: [AnimalsModule, SpeciesModule, SeedModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
