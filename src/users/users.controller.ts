import { Body, Controller, Get, Injectable, Post } from '@nestjs/common';
import { CreateUserClass } from 'src/dto/createUser.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private userService:UsersService){}
    @Post()
    create(@Body() userDTO:CreateUserClass){
        return this.userService.createUser(userDTO);
    }
    @Get()
    getAll(@Body() userDTO:CreateUserClass){
        return this.userService.getAllUser();
    }
}
