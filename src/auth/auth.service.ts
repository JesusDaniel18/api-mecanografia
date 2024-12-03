import { Injectable } from '@nestjs/common';
import { UsuariosService } from '../usuarios/usuarios.service';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from '../../node_modules/passport-jwt'; 


@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsuariosService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.findOneByUsername(username); 
    if (user && (password == user.Contrasena)) { 
      const { Contrasena, ...result } = user; 
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload: JwtPayload = { username: user.NombreUsuario, sub: user.UsuarioID }; 
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
