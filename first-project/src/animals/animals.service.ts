import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class AnimalsService {

    private Animals = [
        {
            id: 1,
            type: 'Mamífero',
            species: 'Perro',
            color: 'Negro',
        },
        {
            id: 2,
            type: 'Mamífero',
            species: 'León',
            color: 'Naranja',
        },
        {
            id: 3,
            type: 'Mamífero',
            species: 'Jirafa',
            color: 'Manchado',
        },
    ];


    findAll() {
        return this.Animals
    }

    findById(id: number) {
        const animal = this.Animals.find(animal => animal.id === id)

        if (!animal) throw new NotFoundException(`El animal con el id '${id}' no fue encontrado`)

        return animal
    }

}
