import { Equipe } from 'src/equipes/equipe.entity';
import { Pedido } from 'src/pedidos/pedido.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
} from 'typeorm';

export enum TipoUsuario {
  ADMIN = 'admin',
  BARTENDER = 'bartender',
  CLIENTE = 'cliente',
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

  @OneToMany(() => Pedido, (pedido) => pedido.cliente)
  pedidosFeitos: Pedido[];

  @ManyToOne(() => Equipe, (equipe) => equipe.participantes)
  equipe: Equipe;
}
