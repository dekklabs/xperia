import { 
  BaseEntity, 
  Column, 
  CreateDateColumn, 
  PrimaryGeneratedColumn, 
  UpdateDateColumn,
  Entity,
  DeleteDateColumn
} from "typeorm";

@Entity("Tickets")
export class Tickets extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  title: string

  @Column()
  description: string

  @Column()
  userResportId: string

  @Column({
    nullable: true,
    default: "CREATED"
  })
  status: string

  @CreateDateColumn({
    nullable: false
  })
  created_at: Date

  @UpdateDateColumn({
    nullable: false
  })
  updated_at: Date

  @DeleteDateColumn({
    nullable: false
  })
  deleted_at: Date
}
