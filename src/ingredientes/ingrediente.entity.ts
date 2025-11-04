import { ComposicaoDrink } from 'src/composicoes-drinks/composicao-drink.entity';
import { Estoque } from 'src/estoques/estoque.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  OneToMany,
} from 'typeorm';

@Entity()
export class Ingrediente {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ type: 'varchar', length: 255 })
  nome: string;

  @Column({ type: 'varchar', length: 50 })
  unidadeMedida: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  descricao?: string;

  @OneToOne(() => Estoque, (estoque) => estoque.ingrediente)
  estoque: Estoque;

  @OneToMany(() => ComposicaoDrink, (composicao) => composicao.ingrediente)
  composicoes: ComposicaoDrink[];
}
