import { Estoque } from 'src/estoques/estoque.entity';
import { Pedido } from 'src/pedidos/pedido.entity';
import { Usuario } from 'src/usuarios/usuario.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class Equipe {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ type: 'varchar', length: 255 })
  nome: string;

  @OneToMany(() => Usuario, (usuario) => usuario.equipe)
  participantes: Usuario[];

  @OneToMany(() => Pedido, (pedido) => pedido.equipe)
  pedidos: Pedido[];

  @OneToMany(() => Estoque, (estoque) => estoque.equipe)
  estoque: Estoque[];
}
