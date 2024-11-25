import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';


@Injectable()
export class AuthService {
  constructor(private readonly userService: UsersService) {}

  async login(username: string, password: string): Promise<{ message: string }> {
    const user = await this.userService.findByUsername(username);
    if (!user || user.password !== password) {
      return { message: 'Invalid username or password' };
    }

    return { message: 'Login successful' };
  }
}

// jwt
// async login(username: string, password: string): Promise<{ accessToken: string }> {
//   const user = await this.userService.findByUsername(username);
//   if (!user || user.password !== password) {
//     return { accessToken: null };
//   }

//   const payload = { username: user.username, sub: user.id };
//   const accessToken = this.jwtService.sign(payload);
//   return { accessToken };
// }