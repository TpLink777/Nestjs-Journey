
import { Species } from "../../species/entities/species.entity.js";
import { v4 as uuid } from 'uuid'


export const SPECIES_SEED: Species[] = [
    {
        id: uuid(),
        name: "Alcon",
        feeding: "Carnivoro",
        createdAt: new Date().toLocaleDateString('es-CO')
    },
    {
        id: uuid(),
        name: "Tiburon",
        feeding: "Carnivoro",
        createdAt: new Date().toLocaleDateString('es-CO')
    },
    {
        id: uuid(),
        name: "Elefenate",
        feeding: "Herbivoro",
        createdAt: new Date().toLocaleDateString('es-CO')
    },
    {
        id: uuid(),
        name: "Conejo",
        feeding: "Herbivoro",
        createdAt: new Date().toLocaleDateString('es-CO')
    },
    {
        id: uuid(),
        name: "Caballo",
        feeding: "Herbivoro",
        createdAt: new Date().toLocaleDateString('es-CO')
    }
]