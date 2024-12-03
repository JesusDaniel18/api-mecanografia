import { Module } from '@nestjs/common';
import { ResultadosController } from './resultados.controller';
import { ResultadosService } from './resultados.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Resultado } from 'src/entidades/Resultado';


@Module({
  imports: [
   
    TypeOrmModule.forFeature([Resultado]),
  ],
  controllers: [
    ResultadosController,
  ],
  providers: [
    ResultadosService, 
  ],
  exports: [
    ResultadosService, 
  ],
})
export class ResultadosModule {}
