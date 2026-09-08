import { Module } from '@nestjs/common';
import { AnimalsController } from './animals.controller.js';
import { AnimalsService } from './animals.service.js';

@Module({
  controllers: [AnimalsController],
  providers: [AnimalsService]
})
export class AnimalsModule {}
