import { Injectable, NotFoundException } from '@nestjs/common';
import { AnimalInterface } from './interfaces/animal.interface.js';
import { v4 as uuid } from 'uuid'
import { CreateAniamlDto } from './dtos/create-animal.dto.js';

@Injectable()
export class AnimalsService {

    private Animals: AnimalInterface[] = [
        {
            id: uuid(),
            type: 'Mamífero',
            species: 'Perro',
            color: 'Negro',
        },
        {
            id: uuid(),
            type: 'Mamífero',
            species: 'León',
            color: 'Naranja',
        },
        {
            id: uuid(),
            type: 'Mamífero',
            species: 'Jirafa',
            color: 'Manchado',
        },
    ];


    findAll() {
        return this.Animals
    }

    findById(id: string) {
        const animal = this.Animals.find(animal => animal.id === id)

        if (!animal) throw new NotFoundException(`El animal con el id '${id}' no fue encontrado`)

        return animal
    }


    createAnimal( createAniamlDto : CreateAniamlDto) {

        const newAnimal: AnimalInterface = {
            id: uuid(),
            ...createAniamlDto
        }

        this.Animals.push(newAnimal)

        return {
            status: 201,
            message: 'Animal creado exitosamente',
            newAnimal
        }
    }


}
