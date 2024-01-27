import { Test, TestingModule } from '@nestjs/testing';
import { OpenAIserviceService } from './open-aiservice.service';

describe('OpenAiserviceService', () => {
  let service: OpenAIserviceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OpenAIserviceService],
    }).compile();

    service = module.get<OpenAIserviceService>(OpenAIserviceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
