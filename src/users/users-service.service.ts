import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosRequestConfig } from 'axios';

@Injectable()
export class UsersServiceService {
  constructor(private httpService: HttpService) {}

  async getContactByEmail(email: string) {
    const axiosConfig: AxiosRequestConfig = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    return this.httpService
      .get(`contacts/v1/contact/email/${email}/profile`, axiosConfig)
      .subscribe((res) => console.log(res));
  }
}
