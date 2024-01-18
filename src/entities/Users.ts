import { 
  BaseEntity, 
  Column, 
  CreateDateColumn, 
  DeleteDateColumn, 
  Entity, 
  OneToOne, 
  PrimaryGeneratedColumn, 
  UpdateDateColumn
} from "typeorm";
import { UserDetail } from "./UserDetail";

@Entity("Users")
export class Users extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @Column({
    nullable: true
  })
  lastName: string

  @Column()
  username: string

  @Column()
  password: string

  @Column({
    nullable: true
  })
  status: boolean

  @Column()
  email: string

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

  @OneToOne(() => UserDetail, userDetail => userDetail.user)
  userDetail: UserDetail
}
