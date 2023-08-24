import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { CreateUserInputs } from './dto/create-user.input';
import { User } from './entities/user.entity';
import { UserService } from './user.service';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => User)
  public async createUser(
    @Args('createUserInputs') createUserInputs: CreateUserInputs,
  ) {
    return this.userService.createUser(createUserInputs);
  }

  @Query( () => [User], {name: 'GetAllUsers'})
  public async getAllUsers(){
    return this.userService.findAll()
  }

  @Mutation( ()=> Boolean)
  public async DeleteUser(@Args('id') id: string){
    return this.userService.DeleteUser(id)
  }

  @Query(() => User)
  public async getUserById(@Args('id') id: string) {
    return this.userService.getUserById(id)
  }
}
