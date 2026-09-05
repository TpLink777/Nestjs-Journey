
// import { lastname, name } from './base/01-types'
// import { fruits, product, products } from './base/02-objects'
// import { carro1 } from './base/03-classes'
// import { Charmander } from './base/04-methods-asyncs'
import { charmander } from './base/05-injection.ts'


const app =  document.querySelector<HTMLDivElement>('#app')!


app.innerHTML = `
    <h1>${charmander.name}</h1>
`