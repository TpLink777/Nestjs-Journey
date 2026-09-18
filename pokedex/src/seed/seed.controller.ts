import { Controller, Get } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { SeedService } from './seed.service.js';

@Controller('seed')
export class SeedController {

  private defaultInsertLimit: number

  constructor(
    private readonly seedService: SeedService,
    private readonly configService: ConfigService
  ) {
    this.defaultInsertLimit = this.configService.get<number>('defaultInsertLimit')!
  }

  @Get()
  executeSeedController() {
    return this.seedService.executeSeedService(this.defaultInsertLimit)
  }

}
