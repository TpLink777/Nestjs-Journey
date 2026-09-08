import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Post, Put } from '@nestjs/common';
import { AnimalsService } from './animals.service.js';

@Controller('animals')
export class AnimalsController {

    constructor(
        private readonly animalsService: AnimalsService
    ) { }

    @Get()
    findAllAnimals() {
        return this.animalsService.findAll()
    }

    @Get(':id')
    findAnimalById(@Param('id', ParseUUIDPipe) id: string) {
        return this.animalsService.findById(id)
    }

    @Post('create')
    createAnimal(@Body() data: any) {
        return data
    }

    @Put('update/:id')
    updateAnimal(
        @Param('id', ParseUUIDPipe) id: string,
        @Body() data: any
    ) {
        return data
    }


    @Delete('delete/:id')
    deleteAnimal(@Param('id', ParseUUIDPipe) id: string) {
        return "Animal eliminado con id: " + id
    }

}
