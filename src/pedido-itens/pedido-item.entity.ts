import { Drink } from 'src/drinks/drink.entity';
import { Pedido } from 'src/pedidos/pedido.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class PedidoItem {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @ManyToOne(() => Pedido, (pedido) => pedido.itens)
  pedido: Pedido;

  @ManyToOne(() => Drink)
  drink: Drink;

  @Column({ type: 'int' })
  quantidade: number;

  @Column({ type: 'numeric', precision: 10, scale: 2 })
  valorUnitario: number;
}
