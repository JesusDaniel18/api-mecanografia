import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() body: { username: string, password: string }) {
    const user = await this.authService.validateUser(body.username, body.password);
    if (!user) {
      return {
        statusCode: "401 ",
        Autorización: "Denegado",
        Mensaje: "Usuario o contraseña no validos"
      };
    }
    return this.authService.login(user);
  }
}

