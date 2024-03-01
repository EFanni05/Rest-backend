import { PartialType } from '@nestjs/mapped-types';
import { CreateClientDto } from './create-client.dto';
import { IsBooleanString, IsNotEmpty, IsNumber } from 'class-validator';

export class UpdateClientDto extends PartialType(CreateClientDto) {
    @IsNumber()
    @IsNotEmpty()
    id : number

    @IsBooleanString()
    hasCable : boolean
}
