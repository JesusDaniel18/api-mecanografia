import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { Rol } from './Rol';
import { Asignacion } from './Asignacion';
import { Estadistica } from './Estadistica';

@Entity('usuarios')
export class Usuario {
  @PrimaryGeneratedColumn()
  UsuarioID: number;

  @Column()
  NombreUsuario: string;

  @Column()
  Correo: string;

  @Column()
  Contrasena: string;

  @ManyToOne(() => Rol, (rol) => rol.usuarios)
  rol: Rol;

  @OneToMany(() => Asignacion, (asignacion) => asignacion.alumno)
  asignaciones: Asignacion[];

  @OneToMany(() => Estadistica, (estadistica) => estadistica.alumno)
  estadisticas: Estadistica[];
}
