import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Board } from 'src/entity/board.entity';

@Injectable()
export class BoardService {
  constructor(
    @InjectRepository(Board)
    private boardRepository: Repository<Board>,
  ) {}

  async findAll() {
    return this.boardRepository.find();
  }

  async find(id: number) {
    const board = await this.boardRepository.findOne({
      where: {
        id,
      },
      relations: {
        user: true,
      },
    });

    if (!board) throw new HttpException('NotFound', HttpStatus.NOT_FOUND);

    return board;
  }

  async create(data: CreateBoardDto) {
    return this.boardRepository.save(data);
  }

  async update(userId: number, id: number, data: UpdateBoardDto) {
    const board = await this.getBoardById(id);

    if (!board) throw new HttpException('NOT_FOUND', HttpStatus.NOT_FOUND);

    if (userId !== board.userId) {
      throw new UnauthorizedException();
    }

    return this.boardRepository.update(id, {
      ...data,
    });
  }

  async delete(userId: number, id: number) {
    const board = await this.getBoardById(id);

    if (!board) throw new HttpException('NOT_FOUND', HttpStatus.NOT_FOUND);

    if (userId !== board.userId) {
      throw new UnauthorizedException();
    }

    return this.boardRepository.remove(board);
  }

  async getBoardById(id: number) {
    return this.boardRepository.findOneBy({
      id,
    });
  }
}
