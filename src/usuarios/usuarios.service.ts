import { Injectable } from '@nestjs/common';
import { Usuario } from './usuario.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { GetUsuarioDto } from './dto/get/get-usuario.dto';
import { PostUsuarioDto } from './dto/post/post-usuario.dto';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuariosRepository: Repository<Usuario>,
  ) {}

  async getUsuario(data: GetUsuarioDto) {
    return await this.usuariosRepository.findOne({
      where: {
        email: data.email,
        senha: data.senha,
      },
    });
  }

  async postUsuario(data: PostUsuarioDto) {
    return await this.usuariosRepository.save(data);
  }
}
