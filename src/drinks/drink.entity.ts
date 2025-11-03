import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Drink {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column({ nullable: true })
  descricao: string;

  @Column()
  preco: number;

  @Column({ nullable: true })
  imagemUrl: string;
}
