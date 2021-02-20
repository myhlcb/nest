import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { CatsService } from './cats/cats.service';
import { CatsModule } from './cats/cats.module';
import { DogsController } from './dogs/dogs.controller';
import { TigerModule } from './tiger/tiger.module';

@Module({
  imports: [CatsModule, TigerModule],
  controllers: [AppController, CatsController, DogsController],
  providers: [AppService, CatsService],
})
export class AppModule { }
