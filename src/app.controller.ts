import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Logger,
  Param,
  Query,
} from '@nestjs/common';
import { AppService } from './app.service';
import { Ip } from './decorators/ip.decorator';
import { ConfigService } from '@nestjs/config';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly configService: ConfigService
  ) {}

  @Get()
  getHello(@Ip() ip: string): string {
    return this.appService.getHello();
  }

  @Get('name')
  getName(@Query('name') name: string): string {
    return `${name} hello`;
  }
}
