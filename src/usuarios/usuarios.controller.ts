import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { GetUsuarioDto } from './dto/get/get-usuario.dto';
import { PostUsuarioDto } from './dto/post/post-usuario.dto';
import { UsuariosService } from './usuarios.service';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Get('usuario')
  getUsuario(@Query() data: GetUsuarioDto) {
    return this.usuariosService.getUsuario(data);
  }

  @Post('usuario')
  postUsuario(@Body() data: PostUsuarioDto) {
    return this.usuariosService.postUsuario(data);
  }
}
