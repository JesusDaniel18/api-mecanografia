import { Module } from '@nestjs/common';
import { AsignacionesService } from './asignaciones.service';
import { AsignacionesController } from './asignaciones.controller';
import { Asignacion } from 'src/entidades/Asignacion';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  providers: [AsignacionesService],
  controllers: [AsignacionesController]
})

@Module({
  imports: [
    TypeOrmModule.forFeature([Asignacion]),
  ],
  controllers: [
    AsignacionesController, 
  ],
  providers: [
    AsignacionesService,
  ],
  exports: [
    AsignacionesService, 
  ],
})
export class AsignacionesModule {}
