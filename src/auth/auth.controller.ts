import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(
    @Body() loginDto: { username: string; password: string },
  ): Promise<{ message: string }> {
    return this.authService.login(loginDto.username, loginDto.password);
  }
}

// jwt
// async login(
//   @Body() loginDto: { username: string; password: string },
// ): Promise<{ accessToken: string }> {
//   return this.authService.login(loginDto.username, loginDto.password);
// }