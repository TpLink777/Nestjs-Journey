
import { lastname, name } from './base/01-types'



const app =  document.querySelector<HTMLDivElement>('#app')!


app.innerHTML = `
    <h1>Hola mi nombre es ${name + lastname}</h1>

`