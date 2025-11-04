import { Ingrediente } from 'src/ingredientes/ingrediente.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';

@Entity()
export class Estoque {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  dataAtualizado: Date;

  @Column({ type: 'int' })
  quantidadeDisponivel: number;

  @OneToOne(() => Ingrediente, (ingrediente) => ingrediente.estoque)
  ingrediente: Ingrediente;
}
