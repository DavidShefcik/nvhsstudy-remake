import { Injectable, HttpException, HttpStatus, Logger } from '@nestjs/common';
import { User } from '@prisma/client';

import { PrismaService } from '~/modules/utils/prisma';
import { ERROR_MESSAGES } from '~/constants/errorMessages';

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}

  async getUser(id: number): Promise<User | void> {
    try {
      await this.prismaService.user.findUnique({
        where: {
          id,
        },
        rejectOnNotFound: true,
      });
    } catch (error) {
      Logger.error(`User with the ID of ${id} was not found`);

      throw new HttpException(
        ERROR_MESSAGES.USER_NOT_FOUND,
        HttpStatus.NOT_FOUND,
      );
    }
  }
}
