import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { LeccionesService } from './lecciones.service';
import { Leccion } from '../entidades/Leccion';

@Controller('lecciones')
export class LeccionesController {
  constructor(private readonly leccionesService: LeccionesService) {}

  @Get()
  findAll(): Promise<Leccion[]> {
    return this.leccionesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Leccion> {
    return this.leccionesService.findOne(+id);
  }

  @Post()
  create(@Body() leccion: Partial<Leccion>): Promise<Leccion> {
    return this.leccionesService.create(leccion);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.leccionesService.remove(+id);
  }
}
