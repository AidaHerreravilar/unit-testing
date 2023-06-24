import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BuscarValorService } from './buscar-valor/buscar-valor.service';
import { BuscarValorController } from './buscar-valor/buscar-valor.controller';

@Module({
  imports: [],
  controllers: [AppController, BuscarValorController],
  providers: [AppService, BuscarValorService],
})
export class AppModule {}
