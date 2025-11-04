import { Equipe } from 'src/equipes/equipe.entity';
import { Ingrediente } from 'src/ingredientes/ingrediente.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';

@Entity()
export class Estoque {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  dataAtualizado: Date;

  @Column({ type: 'int' })
  quantidadeDisponivel: number;

  @Column({ type: 'numeric', precision: 10, scale: 2 })
  valorTotal: number;

  @ManyToOne(() => Equipe, (equipe) => equipe.estoque)
  equipe: Equipe;

  @OneToMany(() => Ingrediente, (ingrediente) => ingrediente.estoque)
  ingrediente: Ingrediente;
}
