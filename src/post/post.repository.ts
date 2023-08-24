import { Injectable } from '@nestjs/common/decorators';
import { BaseRepository } from 'src/database/base.respoitory';
import { DataSource } from 'typeorm';
import { CreatePostInput } from './dto/create-post.input';
import { Post } from './entities/post.entity';

@Injectable()
export class PostRepository extends BaseRepository<Post> {
  constructor(private readonly dataSource: DataSource) {
    super(Post, dataSource.createEntityManager());
  }

  async findAll(){
    return this.find()
  }

  async deletePost(id: string){
    await this.delete({id})
  }

  async createPost(createPostInput: CreatePostInput) {
    return this.save({
      name: createPostInput.postName,
      postorder:createPostInput.postorder,
      userId: createPostInput.userId,
    });
  }
}
