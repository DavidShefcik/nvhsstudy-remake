import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { PrismaService } from '~/modules/utils/prisma';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const prismaService: PrismaService = app.get(PrismaService);
  prismaService.enableShutdownHooks(app);

  await app.listen(1337);
}
bootstrap();
