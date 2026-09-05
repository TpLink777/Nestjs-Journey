
// import { lastname, name } from './base/01-types'
// import { fruits, product, products } from './base/02-objects'
// import { carro1 } from './base/03-classes'
// import { charmander } from './base/05-injection'
// import { Charmander } from './base/04-methods-asyncs'
// import { Perro } from "./base/06-decorators"
import { perro1 } from "./base/07-decorators2"


const app =  document.querySelector<HTMLDivElement>('#app')!


app.innerHTML = `
    <h1>${perro1}</h1>
`