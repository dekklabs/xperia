import { 
  BaseEntity, 
  Column, 
  Entity, 
  PrimaryGeneratedColumn
} from "typeorm";

@Entity("UserDetail")
export class UserDetail extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  photo: string

  // @OneToOne(() => Users, user => user.userDetail)
  // @JoinColumn({ name: 'userId' })
  // user: Users
}
