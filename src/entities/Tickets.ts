import { 
  BaseEntity, 
  Column, 
  CreateDateColumn, 
  PrimaryGeneratedColumn, 
  UpdateDateColumn,
  Entity,
  DeleteDateColumn,
  ManyToOne,
  JoinColumn,
  OneToMany
} from "typeorm";
import { Users } from "./Users";
import { Comments } from "./Comments";

@Entity("Tickets")
export class Tickets extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  title: string

  @Column()
  description: string

  @Column({
    nullable: true,
  })
  userId: string

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

  @ManyToOne(() => Users, user => user.tickets)
  @JoinColumn({ name: 'userId' })
  user: Users

  @OneToMany(() => Comments, comments => comments.ticket)
  comments: Comments[]
}
