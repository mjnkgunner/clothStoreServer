import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
// import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [
    UsersModule,
  ],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}

// jwt
// imports: [
//   UsersModule,
//   JwtModule.register({
//     secret: 'yourSecretKey', // Use an environment variable for security
//     signOptions: { expiresIn: '1h' },
//   }),
// ],
// providers: [AuthService],
// controllers: [AuthController],
// })