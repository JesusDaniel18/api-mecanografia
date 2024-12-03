import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuariosModule } from './usuarios/usuarios.module';
import { AsignacionesModule } from './asignaciones/asignaciones.module';
import { Usuario } from './entidades/Usuario';
import { Rol } from './entidades/Rol';
import { Estadistica } from './entidades/Estadistica';
import { Asignacion } from './entidades/Asignacion';
import { Leccion } from './entidades/Leccion';
import { Resultado } from './entidades/Resultado';
import { LeccionesModule } from './lecciones/lecciones.module';
import { EstadisticasModule } from './estadisticas/estadisticas.module';
import { ResultadosModule } from './resultados/resultados.module';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root', 
      password: '', 
      database: 'mecanografiaapp', 
      entities: [__dirname + '/**/*.entity{.ts,.js}',  Usuario, Rol, Estadistica, Asignacion, Leccion, Resultado],
      synchronize: true, 
    }),
    UsuariosModule,
    AsignacionesModule,
    LeccionesModule,
    EstadisticasModule,
    ResultadosModule,
    AuthModule
  ],
  controllers: [AuthController],
})
export class AppModule {}
