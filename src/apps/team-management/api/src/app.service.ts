import { Injectable } from '@nestjs/common';
import { Test } from 'team-management'

@Injectable()
export class AppService {
  getHello(): string {
    return new Test().test();
  }
}
