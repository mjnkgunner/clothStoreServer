// src/users/users.controller.ts
import { Controller, Get, Post, Put, Delete, Param, Body, NotFoundException } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './schemas/user.schema';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async createUser(@Body() userData: Partial<User>): Promise<User> {
    return this.usersService.create(userData);
  }

  @Get()
  async getAllUsers(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  async getUser(@Param('id') id: string): Promise<User> {
    return this.usersService.findOne(id);
  }

  @Put(':id')
  async updateUser(@Param('id') id: string, @Body() updateData: Partial<User>): Promise<User> {
    return this.usersService.update(id, updateData);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string): Promise<void> {
    return this.usersService.delete(id);
  }
  @Get('username/:username')
  async findByUsername(@Param('username') username: string): Promise<User> {
    return this.usersService.findByUsername(username);
  }
}
