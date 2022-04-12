import { Body, Controller, Get, Injectable, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateUserClass } from 'src/dto/createUser.dto';
import { User } from './users.model';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private userService:UsersService){}
    @ApiOperation({summary:'Создание пользователя'})
    @ApiResponse({status:200,type:User})
    @Post()
    create(@Body() userDTO:CreateUserClass){
        return this.userService.createUser(userDTO);
    }
    @ApiOperation({summary:'Получение всех пользователей'})
    @ApiResponse({status:200,type:[User]})
    @Get()
    getAll(@Body() userDTO:CreateUserClass){
        return this.userService.getAllUser();
    }
}
