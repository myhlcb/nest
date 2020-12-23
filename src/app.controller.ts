import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('hello')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Post('cat')
  create(): string {
    return 'this will create a cat ';
  }
  @Get('cat')
  getHello(): string {
    return this.appService.getHello();
  }
}
