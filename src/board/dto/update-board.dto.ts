import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class UpdateBoardDto {
    @IsNotEmpty()
    @ApiProperty({
        description: '내용',
        required: true,
        example: '안녕하세요',
      })
    contents: string;
}