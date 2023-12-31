import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from '../users/users.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { jwtConstants } from './constants';
import { S3Module } from 'src/modules/aws/s3/s3.module';
import { S3Service } from 'src/modules/aws/s3/s3.service';
import { PrismaModule, PrismaService } from 'src/modules/prisma';

@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60d' },
    }),
    S3Module,
    PrismaModule,
  ],
  providers: [AuthService, S3Service, PrismaService],
  controllers: [AuthController],
})
export class AuthModule {}
