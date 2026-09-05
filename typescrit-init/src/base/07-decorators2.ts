import { Deprecated } from "../decorators/deprecated.decorator"


class Perro {

    constructor(
        public readonly id: number,
        public name: string
    ) { }


    Scream() {
        console.log(`El perro se llama ${this.name.toUpperCase()}`)
    }

    @Deprecated('Clase obsoleta, no se esta utilizando')
    Speak() {
        console.log(`El perro ${this.name.toUpperCase()} habla !!!`)
    }

}

export const perro1 = new Perro(1, 'niño')
perro1.Scream()
perro1.Speak()