/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { CreatePostInput } from './dto/create-post.input';
import { PostRepository } from './post.repository';

@Injectable()
export class PostService {
  constructor(private readonly postRepo: PostRepository) {}


  findAll(){
    return this.postRepo.findAll()
  }



  async delete(id: string): Promise<Boolean> {
    const deletedat = await this.postRepo.delete({id});
    return deletedat.affected>0;
  }
  

  create(createPostInput: CreatePostInput) {
    return this.postRepo.createPost(createPostInput);
  }
}
