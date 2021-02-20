import { Module } from '@nestjs/common';
import { TigerController } from './tiger.controller';
import { TigerService } from './tiger.service';

@Module({
    controllers: [TigerController],
    providers: [TigerService],
})
export class TigerModule {
    constructor(private readonly tigerService: TigerService) { }
}
