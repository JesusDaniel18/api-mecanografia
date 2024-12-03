import { Module } from '@nestjs/common';
import { UsuariosModule } from '../usuarios/usuarios.module'; 
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsuariosService } from '../usuarios/usuarios.service'; 
import { JwtStrategy } from './jwt.strategy'; 

@Module({
  imports: [
    UsuariosModule, 
    PassportModule,
    JwtModule.register({
      secret: 'secretKey', 
      signOptions: { expiresIn: '60m' }, 
    }),
  ],
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController],
  exports: [
    AuthService, 
  ],
})
export class AuthModule {}
