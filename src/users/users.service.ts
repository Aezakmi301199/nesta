import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserClass } from 'src/dto/createUser.dto';
import { User } from './users.model';

@Injectable()
export class UsersService {

    constructor(@InjectModel(User) private userRepository:typeof User){}

    async createUser(dto:CreateUserClass){
        const user = await this.userRepository.create(dto);
        return user
    }
    async getAllUser(){
        const users = await this.userRepository.findAll();
        return users
    }
}
