import { Estoque } from 'src/estoques/estoque.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

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

  @ManyToOne(() => Estoque, (e) => e.ingrediente)
  estoque: Estoque;
}
