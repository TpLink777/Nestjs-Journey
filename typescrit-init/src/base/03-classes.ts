
class Carro {

    constructor(
        public readonly id: number,
        private _marca: string,
        public color: string,
        public motor: string,
        public caracteristicas: string
    ) { }

    get marca(): string {
        return this._marca;
    }

    set marca(nuevaMarca: string) {
        if (!nuevaMarca.trim()) {
            throw new Error("La marca no puede estar vacía");
        }

        this._marca = nuevaMarca;
    }

    conducir(): void {
        console.log(
            `Estoy conduciendo un ${this.marca} de color ${this.color}`
        );
    }

    mostrarCaracteristicas(): void {
        console.log(
            `Características: ${this.caracteristicas}. Motor: ${this.motor}`
        );
    }
}

export const carro1 = new Carro(
    1,
    "Chevrolet",
    "Negro",
    "V123",
    "Carro mediano para uso familiar"
);

console.log(carro1.marca); //! Llamado del Getter

carro1.marca = "Toyota"; //! Setter

console.log(carro1.marca); //! Impresion del cambio de marca Toyota

carro1.conducir();
carro1.mostrarCaracteristicas();


