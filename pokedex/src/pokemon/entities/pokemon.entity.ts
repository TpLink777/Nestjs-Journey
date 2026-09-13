
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { Document } from "mongoose"

@Schema() //! define que esta clase representa un Schema
export class Pokemon extends Document {
    // Document es una clase de Mongoose que representa un documento en la base de datos.
    // Al extender Document, la clase Pokemon hereda todas las propiedades y métodos de un documento de Mongoose,
    // lo que permite interactuar con la base de datos de manera más sencilla y eficiente.

    @Prop({
        unique: true,
        index: true
    })
    name: string

    @Prop({ //! define los campos del Schema
        unique: true,
        index: true
    })
    pokenum: number

}

export const PokemonSchema = SchemaFactory.createForClass(Pokemon) //! Schema de Mongoose generado
