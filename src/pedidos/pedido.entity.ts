import { Drink } from 'src/drinks/drink.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

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

  @Column({ type: 'varchar', length: 255 })
  cliente: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  dataPedido: Date;

  @Column({ type: 'enum', enum: StatusPedido, default: StatusPedido.PENDENTE })
  status: StatusPedido;

  @ManyToOne(() => Drink)
  drink: Drink;
}
