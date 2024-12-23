import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuariosController } from './usuarios.controller';
import { UsuariosService } from './usuarios.service';
import { Usuario } from 'src/entidades/Usuario';


@Module({
  imports: [
   
    TypeOrmModule.forFeature([Usuario]),
  ],
  controllers: [
    UsuariosController, 
  ],
  providers: [
    UsuariosService, 
  ],
  exports: [
    UsuariosService, 
  ],
})
export class UsuariosModule {}

