import { BaseEntity, Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Users } from "./Users";

@Entity("UserDetail")
export class UserDetail extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  photo: string

  @OneToOne(() => Users, user => user.userDetail)
  @JoinColumn({ name: 'userId' })
  user: Users
}
