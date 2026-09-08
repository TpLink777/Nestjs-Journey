import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Post, Put } from '@nestjs/common';
import { AnimalsService } from './animals.service.js';
import { CreateAniamlDto } from './dtos/create-animal.dto.js';
import { UpdateAniamlDto } from './dtos/update-animal.dto.js';

@Controller('animals')
export class AnimalsController {

    constructor(
        private readonly animalsService: AnimalsService
    ) {}


    @Get()
    findAllAnimals() {
        return this.animalsService.findAll()
    }

    @Get(':id')
    findAnimalById(@Param('id', ParseUUIDPipe) id: string) {
        return this.animalsService.findById(id)
    }

    @Post('create')
    createAnimal(@Body() createAniamlDto: CreateAniamlDto) {
        return this.animalsService.createAnimal(createAniamlDto)
    }

    @Put('update/:id')
    updateAnimal(
        @Param('id', ParseUUIDPipe) id: string,
        @Body() updateAnimalDto: UpdateAniamlDto
    ) {
        return this.animalsService.updateAnimal(id, updateAnimalDto)
    }


    @Delete('delete/:id')
    deleteAnimal(@Param('id', ParseUUIDPipe) id: string) {
        return this.animalsService.deleteAnimal(id)
    }

}
