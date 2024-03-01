import { IsBoolean, IsBooleanString, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateClientDto {
    @IsString()
    @IsNotEmpty()
    address : string
    
    @IsString()
    @IsNotEmpty()
    name : string

    @IsNumber()
    @IsNotEmpty()
    monthyLimit : number
}
