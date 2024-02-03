import { 
  BaseEntity, 
  Column, 
  CreateDateColumn, 
  DeleteDateColumn, 
  Entity, 
  JoinColumn, 
  ManyToOne, 
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm";
import { Tickets } from "./Tickets";
import { Users } from "./Users";

@Entity("Comments")
export class Comments extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  comment: string

  @Column()
  userId: string

  @Column()
  ticketId: string

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

  @ManyToOne(() => Users, users => users.comments)
  @JoinColumn({ name: 'userId' })
  user: Users

  @ManyToOne(() => Tickets, tickets => tickets.comments)
  @JoinColumn({ name: 'ticketId' })
  ticket: Tickets
}
