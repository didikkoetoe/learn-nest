import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  index() {
    return {
      app: 'Bookmark',
      version: '1.0.0.0',
    };
  }
}
