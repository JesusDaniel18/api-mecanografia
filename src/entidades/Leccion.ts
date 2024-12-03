import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { Usuario } from './Usuario';
import { Asignacion } from './Asignacion';

@Entity('lecciones')
export class Leccion {
  @PrimaryGeneratedColumn()
  LeccionID: number;

  @Column()
  Titulo: string;

  @Column({ type: 'text', nullable: true })
  Descripcion: string;

  @Column({ type: 'text' })
  TextoLeccion: string;

  @Column({ type: 'enum', enum: ['Principiante', 'Intermedio', 'Avanzado'] })
  NivelDificultad: string;

  @ManyToOne(() => Usuario, (usuario) => usuario.asignaciones)
  profesor: Usuario;

  @OneToMany(() => Asignacion, (asignacion) => asignacion.leccion)
  asignaciones: Asignacion[];

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  FechaCreacion: Date;
}
