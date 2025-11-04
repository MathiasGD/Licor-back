import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

export enum TipoUsuario {
  ADMIN = 'admin',
  PROFISSIONAL = 'profissional',
}

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ type: 'varchar', length: 255 })
  nome: string;

  @Column({ type: 'varchar', length: 255, unique: true })
  email: string;

  @Column({ type: 'varchar', length: 255 })
  senha: string;

  @Column({ type: 'enum', enum: TipoUsuario })
  tipoUsuario: TipoUsuario;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  dataCadastro: Date;
}
