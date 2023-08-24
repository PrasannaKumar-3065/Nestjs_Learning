import { ObjectType, Field } from '@nestjs/graphql';
import { User } from 'src/user/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  
  UpdateDateColumn,
} from 'typeorm';

@ObjectType()
@Entity({ name: 'post' })
export class Post {
  @Field()
  @PrimaryGeneratedColumn('uuid', { name: 'post_id' })
  id: string;

  @Field( () => String)
  @Column({ name: 'post_name' })
  name: string;

  @Field( () => String)
  @Column({ name: 'post_postorder' })
  postorder: string;

  @Field( () => Date )
  @CreateDateColumn({ name: 'post_createdat' })
  createdat: Date;

  @Field( () => Date )
  @DeleteDateColumn({ name: 'post_deletedat' })
  deletedat: Date;

  @Field( () => Date )
  @UpdateDateColumn({ name: 'post_updatedat' })
  updatedat: Date;

  @Field()
  @ManyToOne(() => User, (user) => user.post)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Field()
  @Column({ name: 'user_id' })
  userId: string;
}
