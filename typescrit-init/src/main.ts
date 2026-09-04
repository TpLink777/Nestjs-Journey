
import { lastname, name } from './base/01-types'
import { fruits, product, products } from './base/02-objects'
import { carro1 } from './base/03-classes'


const app =  document.querySelector<HTMLDivElement>('#app')!


app.innerHTML = `
    <h1>Hola mi nombre es ${name + lastname}  ${carro1}</h1>

`