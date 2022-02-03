import { Controller, Get } from '@nestjs/common';
import { UsersServiceService } from './users-service.service';

@Controller('users')
export class UsersController {
  private readonly testEmail = 'testingapis@hubspot.com';

  constructor(private usersServiceService: UsersServiceService) {}

  @Get()
  getContactByEmail() {
    this.usersServiceService.getContactByEmail(this.testEmail);
  }
}
