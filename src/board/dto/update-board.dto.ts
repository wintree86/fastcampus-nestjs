import { ApiProperty, OmitType, PartialType, PickType } from "@nestjs/swagger";
import { IsOptional, MaxLength, MinLength } from "class-validator";
import { CreateBoardDto } from "./create-board.dto";

export class UpdateBoardDto {
    @MinLength(2)
    @MaxLength(20)
    @IsOptional()
    name?: string;

    @IsOptional()
    contents?: string;
}