import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { PostService } from './post.service';
import { Post } from './entities/post.entity';
import { CreatePostInput } from './dto/create-post.input';
import { Delete, Param } from '@nestjs/common';

@Resolver(() => Post)
export class PostResolver {
  constructor(private readonly postService: PostService) {}

  @Query(()=>[Post])
  findAllPost(){
    return this.postService.findAll()
  }

  @Mutation( () =>Boolean)
async DeletePost(@Args('id') id: string): Promise<Boolean>{
  const deleted = await this.postService.delete(id)
  return deleted
}

  @Mutation( ()=> Post)
  createPost(@Args('createPostInput') createPostInput: CreatePostInput) {
    return this.postService.create(createPostInput);
  }
}
