
import { IsOptional, IsString, IsUUID } from "class-validator"


export class UpdateAniamlDto {

    @IsString({ message: 'El id del animal debe de ser un string ' })
    @IsUUID()
    @IsOptional()
    readonly id?: string

    @IsString({ message: 'El typo del animal debe de ser un string ' })
    @IsOptional()
    readonly type?: string

    @IsString({ message: 'La specie del animal debe de ser un string ' })
    @IsOptional()
    readonly species?: string

    @IsString({ message: 'El color del animal debe de ser un string ' })
    @IsOptional()
    readonly color?: string
}