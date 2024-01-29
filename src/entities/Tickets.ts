import { 
  BaseEntity, 
  Column, 
  CreateDateColumn, 
  PrimaryGeneratedColumn, 
  UpdateDateColumn
} from "typeorm";

export class Tickets extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  title: string

  @Column()
  description: string

  @Column()
  userResportId: string

  @Column()
  status: string

  @Column()
  idDeleted: boolean

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
