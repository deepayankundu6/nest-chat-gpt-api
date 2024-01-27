import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ParameterStoreService } from './parameter-store/parameter-store.service';
import { OpenAIserviceService } from './open-aiservice/open-aiservice.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, ParameterStoreService, OpenAIserviceService],
})
export class AppModule {}
