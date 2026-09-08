
import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { AnimalInterface } from './interfaces/animal.interface.js';
import { CreateAniamlDto, UpdateAniamlDto } from './dtos/index.js';
import { v4 as uuid } from 'uuid'


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


    createAnimal(createAniamlDto: CreateAniamlDto) {

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


    updateAnimal(id: string, updateAniamlDto: UpdateAniamlDto) {

        let findAnimal = this.findById(id)

        if (updateAniamlDto.id && updateAniamlDto.id !== id)
            throw new BadRequestException(`Animal con el id ${id} no es valido`)

        this.Animals = this.Animals.map(animal => {
            if (animal.id === id) {
                findAnimal = {
                    ...findAnimal,
                    ...updateAniamlDto,
                    id
                }
                return findAnimal
            }
            return animal
        })

        return {
            status: 200,
            message: 'Animal actualizado exitosamente',
            findAnimal
        }
    }


    deleteAnimal(id: string) {

        this.findById(id)

        this.Animals = this.Animals.filter(animal => animal.id !== id)

        return {
            status: 200,
            message: 'Animal eliminado exitosamente',
        }

    }


}
