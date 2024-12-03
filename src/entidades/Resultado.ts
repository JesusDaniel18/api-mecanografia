import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Asignacion } from './Asignacion';

@Entity('resultados')
export class Resultado {
  @PrimaryGeneratedColumn()
  ResultadoID: number;

  @ManyToOne(() => Asignacion, (asignacion) => asignacion.AsignacionID)
  asignacion: Asignacion;

  @Column({ type: 'int', nullable: true })
  VelocidadPalabrasPorMinuto: number;

  @Column({ type: 'decimal', precision: 5, scale: 2, nullable: true })
  PrecisiónPorcentaje: number;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  FechaRealizacion: Date;
}
