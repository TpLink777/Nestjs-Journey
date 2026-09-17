
import { Injectable } from "@nestjs/common";
import axios, { AxiosInstance } from "axios";
import { HttpAdapter } from "../interfaces/http-adapter.interface.js";

@Injectable()

//! implemts significa que la clase AxiosAdapter implementa la interfaz HttpAdapter,
//! lo que obliga a la clase a implementar el metodo get definido en la interfaz

export class AxiosAdapter implements HttpAdapter {

    //! Propiedad o atributo
    private  axios: AxiosInstance = axios// ! creacion de una instancia de axios

    async get<T>(url: string): Promise<T> {
        try {
            const { data } = await this.axios.get<T>(url)
            return data
        } catch (err) {
            throw new Error(`Revision del error en axios.adpter`)
        }
    }
}