import { 
  BaseEntity, 
  Column, 
  CreateDateColumn, 
  DeleteDateColumn, 
  Entity, 
  OneToMany, 
  OneToOne, 
  PrimaryGeneratedColumn, 
  UpdateDateColumn
} from "typeorm";
import { Tickets } from "./Tickets";
import { Comments } from "./Comments";
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

  @OneToMany(() => Tickets, ticket => ticket.userId)
  tickets: Tickets[]

  @OneToMany(() => Comments, comments => comments.userId)
  comments: Comments

  @OneToOne(() => UserDetail, userdetail => userdetail.user)
  userdetails: UserDetail
}
