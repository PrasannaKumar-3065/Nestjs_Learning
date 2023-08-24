import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Post } from 'src/post/entities/post.entity';
import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn,  UpdateDateColumn } from 'typeorm';

@ObjectType()
@Entity({ name: 'users' })
export class User {
  @Field()
  @PrimaryGeneratedColumn('uuid', { name: 'user_id' })
  id: string;

  @Field()
  @Column({ name: 'user_name' })
  fullname: string;

  @Field()
  @Column({ name: 'user_phonenumber' })
  phonenumber: string;

  @Field( () => Date)
  @CreateDateColumn({ name: 'user_createdat' })
  createdat: Date;

  @Field( () => Date)
  @DeleteDateColumn({ name: 'user_deletedat' })
  deletedat: Date;

  @Field( () => Date )
  @UpdateDateColumn({ name: 'user_updatedat' })
  updatedat: Date;

  @Field(() => [Post], { nullable: true })
  @OneToMany(() => Post, (post) => post.user)
  post: Post[];
}
