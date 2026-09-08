
import { AnimalInterface } from "../../animals/interfaces/animal.interface.js";
import { v4 as uuid } from 'uuid'

export const ANIMALS_SEED: AnimalInterface[] = [
    {
        id: uuid(),
        type: "Mamífero",
        species: "Perro",
        color: "Negro"
    },
    {
        id: uuid(),
        type: "Oviparo",
        species: "Aguila",
        color: "Cafe"
    },
    {
        id: uuid(),
        type: "Mamífero",
        species: "Gato",
        color: "Naranja"
    },
    {
        id: uuid(),
        type: "Oviparo",
        species: "Serpiente",
        color: "Verde"
    },
    {
        id: uuid(),
        type: "Vivíparos",
        species: "Alce",
        color: "Cafe"
    }
]