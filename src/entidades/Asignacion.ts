import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Usuario } from './Usuario';
import { Leccion } from './Leccion';


@Entity('asignaciones')
export class Asignacion {
  @PrimaryGeneratedColumn()
  AsignacionID: number;

  @ManyToOne(() => Leccion, (leccion) => leccion.asignaciones)
  leccion: Leccion;

  @ManyToOne(() => Usuario, (usuario) => usuario.asignaciones)
  alumno: Usuario;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  FechaAsignacion: Date;
}
