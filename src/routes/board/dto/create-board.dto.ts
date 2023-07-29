import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateBoardDto {
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    description: '작성자 아이디',
    required: true,
    example: '1',
  })
  userId: number;

  @IsNotEmpty()
  @ApiProperty({
    description: '내용',
    required: true,
    example: '안녕하세요',
  })
  contents: string;
}
