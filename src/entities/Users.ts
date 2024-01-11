import { 
  BaseEntity, 
  Column, 
  CreateDateColumn, 
  DeleteDateColumn, 
  Entity, 
  PrimaryGeneratedColumn, 
  UpdateDateColumn
} from "typeorm";

@Entity("Users")
export class Users extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @Column()
  lastName: string

  @Column()
  username: string

  @Column()
  password: string

  @Column()
  status: boolean

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
