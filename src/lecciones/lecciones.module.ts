import { Module } from '@nestjs/common';
import { LeccionesController } from './lecciones.controller';
import { LeccionesService } from './lecciones.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Leccion } from 'src/entidades/Leccion';

@Module({
  imports: [

    TypeOrmModule.forFeature([Leccion]),
  ],
  controllers: [
    LeccionesController, 
  ],
  providers: [
    LeccionesService, 
  ],
  exports: [
    LeccionesService, 
  ],
})
export class LeccionesModule {}
