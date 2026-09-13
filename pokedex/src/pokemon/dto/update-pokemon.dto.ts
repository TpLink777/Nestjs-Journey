import { PartialType } from '@nestjs/mapped-types';
import { CreatePokemonDto } from './create-pokemon.dto.js';

export class UpdatePokemonDto extends PartialType(CreatePokemonDto) {}
