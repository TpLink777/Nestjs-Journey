import { Controller, Get } from '@nestjs/common';
import { SeedService } from './seed.service.js';

@Controller('seed')
export class SeedController {
  constructor(private readonly seedService: SeedService) {}

  @Get()
  executeSeedController() {
    return this.seedService.executeSeedService(650)
  }

}
