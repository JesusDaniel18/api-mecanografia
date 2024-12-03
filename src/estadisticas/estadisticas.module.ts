import { Module } from '@nestjs/common';
import { EstadisticasController } from './estadisticas.controller';
import { EstadisticasService } from './estadisticas.service';
import { Estadistica } from 'src/entidades/Estadistica';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
   
    TypeOrmModule.forFeature([Estadistica]),
  ],
  controllers: [
    EstadisticasController, 
  ],
  providers: [
    EstadisticasService, 
  ],
  exports: [
    EstadisticasService,
  ],
})
export class EstadisticasModule {}
