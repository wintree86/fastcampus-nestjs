import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(
        private readonly userService: UserService
    ) {}

    signup() {

    }

    login() {

    }

    me() {

    }

    @Get()
    getUsers() {
        return this.userService.getUser();
    }
}
