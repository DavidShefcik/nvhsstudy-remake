import { Injectable, ParseIntPipe } from '@nestjs/common';
import { Resolver, Query, Args } from '@nestjs/graphql';

import { User } from '~/graphql';
import { UsersService } from './users.service';

@Injectable()
@Resolver('Users')
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query('user')
  async getUser(
    @Args('id', ParseIntPipe) id: number,
  ): Promise<Pick<User, 'id'> | void> {
    return this.usersService.getUser(id);
  }
}
