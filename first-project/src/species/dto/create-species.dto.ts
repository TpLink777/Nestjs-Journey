
import { IsString, MinLength } from 'class-validator'

export class CreateSpeciesDto {

    @IsString({ message: 'La propiedad NAME debe de ser un string'})
    @MinLength(1)
    name: string

    @IsString({ message: 'La propiedad FEEDING debe de ser un string'})
    @MinLength(1)
    feeding: string
}
