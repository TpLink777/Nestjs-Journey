import { Module } from '@nestjs/common';
import { AnimalsModule } from './animals/animals.module.js';

@Module({
  imports: [AnimalsModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
