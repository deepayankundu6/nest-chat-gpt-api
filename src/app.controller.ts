import { Controller, Get, Param, Post, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { OpenAIserviceService } from './open-aiservice/open-aiservice.service';
import { ParameterStoreService } from './parameter-store/parameter-store.service';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly parameterStoreService: ParameterStoreService) { }

  @Get("/health")
  getHealth(): string {
    return this.appService.healthGet();
  }

  @Post("/health")
  postHealth(@Req() request: Request): string {
    return this.appService.healthPost(request.body);
  }

  @Get("/chat/:message")
  async callAPI(@Param('message') message): Promise<any> {

    try {
      const apiKey = await this.parameterStoreService.getParameter(process.env.ParameterName);
      const OpenAI = new OpenAIserviceService();
      const GPTResponse = await OpenAI.getMessageResponse(apiKey, message);

      return {
        Query: message,
        Answer: GPTResponse
      }

    } catch (error: any) {

      return {
        status: 500,
        message: error.message
      }
    }
  }
}
