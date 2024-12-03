import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from 'src/entidades/Usuario';
import { Repository } from 'typeorm';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario)
    private usuarioRepository: Repository<Usuario>,
  ) {}

  findAll(): Promise<Usuario[]> {
    return this.usuarioRepository.find({ relations: ['rol'] });
  }

  findOne(id: number): Promise<Usuario> {
    return this.usuarioRepository.findOne({ where: { UsuarioID: id }, relations: ['rol'] });
  }

  create(usuario: Partial<Usuario>): Promise<Usuario> {
    const newUsuario = this.usuarioRepository.create(usuario);
    return this.usuarioRepository.save(newUsuario);
  }

  async remove(id: number): Promise<void> {
    await this.usuarioRepository.delete(id);
  }

  async findOneByUsername(username: string): Promise<any> {
    return await this.usuarioRepository.findOne({
      where: { Correo: username },
    });
  }
  
}

