
import axios from "axios";


export class PokeApiAdpter {


    async get( url: string ) {
        const { data } = await axios.get(url);
        return data
    }

}