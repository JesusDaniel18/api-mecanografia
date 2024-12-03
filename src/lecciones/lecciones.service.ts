import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Leccion } from '../entidades/Leccion';

@Injectable()
export class LeccionesService {
  constructor(
    @InjectRepository(Leccion)
    private readonly leccionRepository: Repository<Leccion>,
  ) {}

  findAll(): Promise<Leccion[]> {
    return this.leccionRepository.find();
  }

  findOne(id: number): Promise<Leccion> {
    return this.leccionRepository.findOne({ where: { LeccionID: id } });
  }

  create(leccion: Partial<Leccion>): Promise<Leccion> {
    const newLeccion = this.leccionRepository.create(leccion);
    return this.leccionRepository.save(newLeccion);
  }

  async remove(id: number): Promise<void> {
    await this.leccionRepository.delete(id);
  }
}
