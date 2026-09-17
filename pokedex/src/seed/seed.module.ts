import { Module } from '@nestjs/common';
import { SeedService } from './seed.service.js';
import { SeedController } from './seed.controller.js';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
})
export class SeedModule {}
