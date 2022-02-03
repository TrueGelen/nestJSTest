import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { UsersServiceService } from './users-service.service';
import { UsersController } from './users.controller';

@Module({
  imports: [
    HttpModule.register({
      baseURL: 'https://api.hubapi.com/',
      params: {
        hapikey: 'demo',
      },
    }),
  ],
  controllers: [UsersController],
  providers: [UsersServiceService],
})
export class UsersModule {}
