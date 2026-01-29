import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ) { }

    create(createUserDto: CreateUserDto) {
        const user = this.usersRepository.create(createUserDto);
        return this.usersRepository.save(user);
    }

    findAll() {
        return this.usersRepository.find();
    }

    findOne(id: number) {
        return this.usersRepository.findOneBy({ id });
    }

    findByUsername(username: string) {
        return this.usersRepository.findOneBy({ username });
    }

    update(id: number, updateUserDto: Partial<CreateUserDto>) {
        return this.usersRepository.update(id, updateUserDto);
    }

    async remove(id: number) {
        await this.usersRepository.delete(id);
    }
}
