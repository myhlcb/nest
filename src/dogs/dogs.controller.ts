import { Controller, Get } from '@nestjs/common';

@Controller('dogs')
export class DogsController {
    @Get()
    async findAll(): Promise<string> {
        return 'get all dogs';
    }
}
