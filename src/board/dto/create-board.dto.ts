import { IsNotEmpty, MaxLength, MinLength } from "class-validator";

export class CreateBoardDto {
    @MinLength(2)
    @MaxLength(20)
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    contents: string;
}