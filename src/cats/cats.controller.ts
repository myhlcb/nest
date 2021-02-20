import { Controller, Get } from '@nestjs/common';
import { threadId } from 'worker_threads';
import { CatsService } from './cats.service';
import { Cat } from '../interfaces/cat.interface';
@Controller('cats')
export class CatsController {
    constructor(private catservice: CatsService) { }
    @Get()
    async findAll(): Promise<Cat[]> {
        return this.catservice.findAll();
    }
}
