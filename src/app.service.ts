import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  healthGet(): any {
    return {
      "status": "API is up and running",
    };
  }

  healthPost(payload: any): any {
    // return `The server is up and payload received: ${JSON.stringify(payload)}`;
    return {
      "status": "API is up and running",
      "body": payload
    }
  }
}
