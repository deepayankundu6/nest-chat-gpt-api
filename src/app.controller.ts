import { Controller, Get, Post, Req } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/health")
  getHealth(): string {
    return this.appService.healthGet();
  }

  @Post("/health")
  postHealth(@Req() request: Request): string {
    return this.appService.healthPost(request.body);
  }
}
