import { Body, Controller, Delete, Get, Injectable, Param, Post, Put } from '@nestjs/common';
import { BoardService } from './board.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateBoardDto } from './dto/create-board.dto';

@Controller('board')
@ApiTags('Board')
export class BoardController {
    constructor(
        private readonly boardService: BoardService
    ){}

    @Get()
    findAll() {
        return this.boardService.findAll();
    }

    @Get(':id')
    find(
        @Param('id') id: number
    ) {
        return this.boardService.find(Number(id));
    }

    @Post()
    create(
        @Body() data: CreateBoardDto
    ) {
        return this.boardService.create(data);
    }

    @Put(':id')
    update(
        @Param('id') id: number,
        @Body() data
    ) {
        return this.boardService.update(Number(id), data);
    }


    @Delete(':id')
    remove(
        @Param('id') id: number
    ) {
        return this.boardService.delete(Number(id));
    }
}
