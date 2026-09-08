
import { IsString } from "class-validator"

export class CreateAniamlDto {

    @IsString({ message: 'El typo del animal debe de ser un string '})
    readonly type: string

    @IsString({ message: 'La specie del animal debe de ser un string '})
    readonly species: string

    @IsString({ message: 'El color del animal debe de ser un string '})
    readonly color: string
}
