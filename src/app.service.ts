import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  health(): string {
    return 'The server is up and running';
  }
}
