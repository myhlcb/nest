import { Controller, Get, Post, Body, Res, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { threadId } from 'worker_threads';
import { CatsService } from './cats.service';
import { Cat } from '../interfaces/cat.interface';
import { CreateCatDto } from '../dto/cat.dto';
@Controller('cats')
export class CatsController {
    constructor(private catservice: CatsService) { }
    @Post()
    async create(@Body() createCatDto: CreateCatDto) {
        return this.catservice.create(createCatDto);
    }
    @Get()
    async findAll(): Promise<Cat[]> {
        return this.catservice.findAll();
    }
    @Get('one')
    findOne(@Res() res: Response) {
        return res.status(HttpStatus.OK).send({});
    }
}
