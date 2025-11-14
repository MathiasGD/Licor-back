import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { TipoUsuario } from 'src/usuarios/usuario.entity';

export class PostUsuarioDto {
  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsNotEmpty()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsString()
  senha: string;

  @IsNotEmpty()
  @IsEnum(TipoUsuario)
  tipoUsuario: TipoUsuario;
}
