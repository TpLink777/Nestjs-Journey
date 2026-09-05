
//? Decoradores
const MyDecorator = () => {
    return ( target: Function ) => {
        console.log(target)
    }

}

@MyDecorator()
class Animal {

    constructor(
        public readonly id: number,
        public name: string
    ) { }



    Scream() {
        console.log(`${this.name.toUpperCase()}`)
    }

    Speak() {
        console.log(`El animal ${this.name.toUpperCase()} habla !!!`)
    }

}

export const Perro = new Animal(1, 'niño')
Perro.Scream()
Perro.Speak()

