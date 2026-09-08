import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe } from '@nestjs/common';
import { SpeciesService } from './species.service.js';
import { CreateSpeciesDto } from './dto/create-species.dto.js';
import { UpdateSpeciesDto } from './dto/update-species.dto.js';

@Controller('species')
export class SpeciesController {
  constructor(private readonly speciesService: SpeciesService) { }


  @Get()
  findAll() {
    return this.speciesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.speciesService.findOne(id);
  }

  @Post()
  create(@Body() createSpeciesDto: CreateSpeciesDto) {
    return this.speciesService.create(createSpeciesDto);
  }

  @Patch(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateSpeciesDto: UpdateSpeciesDto
  ) {
    return this.speciesService.update(id, updateSpeciesDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.speciesService.remove(id);
  }
}
