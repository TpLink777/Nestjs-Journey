import { PartialType } from '@nestjs/mapped-types';
import { CreateSpeciesDto } from './create-species.dto.js';

export class UpdateSpeciesDto extends PartialType(CreateSpeciesDto) {}
