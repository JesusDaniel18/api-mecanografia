import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Usuario } from './Usuario';

@Entity('roles')
export class Rol {
  @PrimaryGeneratedColumn()
  RolID: number;

  @Column()
  NombreRol: string;

  @OneToMany(() => Usuario, (usuario) => usuario.rol)
  usuarios: Usuario[];
}
