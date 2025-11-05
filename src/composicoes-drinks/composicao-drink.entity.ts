import { Drink } from 'src/drinks/drink.entity';
import { Ingrediente } from 'src/ingredientes/ingrediente.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class ComposicaoDrink {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ type: 'varchar', length: 50 })
  unidadeMedida: string;

  @Column({ type: 'int' })
  quantidade: number;

  @ManyToOne(() => Drink, (drink) => drink.composicao)
  drink: Drink;

  @ManyToOne(() => Ingrediente, (ingrediente) => ingrediente.composicoes)
  ingrediente: Ingrediente;
}
