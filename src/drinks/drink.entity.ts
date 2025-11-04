import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Drink {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ type: 'varchar', length: 255 })
  nome: string;

  @Column({ type: 'text' })
  modoPreparo: string;

  @Column({ type: 'numeric', precision: 10, scale: 2 })
  precoBase: number;

  @Column({ type: 'varchar', length: 255, nullable: true })
  descricao?: string;

  @OneToMany(() => DrinkIngrediente, (di) => di.drink)
  ingredientes: DrinkIngrediente[];
}
