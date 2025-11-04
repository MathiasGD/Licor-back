import { Equipe } from 'src/equipes/equipe.entity';
import { PedidoItem } from 'src/pedido-itens/pedido-item.entity';
import { Usuario } from 'src/usuarios/usuario.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';

export enum StatusPedido {
  PENDENTE = 'pendente',
  ACEITO = 'aceito',
  EM_PREPARO = 'em_preparo',
  FINALIZADO = 'finalizado',
  CANCELADO = 'cancelado',
}

@Entity()
export class Pedido {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @ManyToOne(() => Usuario, (usuario) => usuario.pedidosFeitos)
  cliente: Usuario;

  @ManyToOne(() => Equipe, (equipe) => equipe.pedidos)
  equipe: Equipe;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  dataPedido: Date;

  @Column({ type: 'enum', enum: StatusPedido, default: StatusPedido.PENDENTE })
  status: StatusPedido;

  @Column({ type: 'numeric', precision: 10, scale: 2 })
  valorTotal: number;

  @OneToMany(() => PedidoItem, (item) => item.pedido)
  itens: PedidoItem[];
}
