import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Usuario } from './Usuario';

@Entity('estadisticas')
export class Estadistica {
  @PrimaryGeneratedColumn()
  EstadisticaID: number;

  @ManyToOne(() => Usuario, (usuario) => usuario.estadisticas)
  alumno: Usuario;

  @Column({ type: 'int', default: 0 })
  TotalLeccionesCompletadas: number;

  @Column({ type: 'decimal', precision: 5, scale: 2, default: 0.0 })
  PromedioVelocidadPalabrasPorMinuto: number;

  @Column({ type: 'decimal', precision: 5, scale: 2, default: 0.0 })
  PromedioPrecision: number;
}
