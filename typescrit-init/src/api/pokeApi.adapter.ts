
import axios from "axios";


export interface HttpAdapter {

    get<T>( url: string ) : Promise<T>

}

//? Implemntes le dice a la clase de que si se quiere implemnetar dicha cosa debe ser como se asigna
export class PokeApiAdpter implements HttpAdapter {

    //? Genericos: <T> El tipo que me den, ese mismo voy a devolver.
    async get<T>( url: string ): Promise<T> {
        const { data } = await axios.get<T>(url);
        return data
    }

}