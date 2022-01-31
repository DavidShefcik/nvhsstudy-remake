import { GraphQLDefinitionsFactory } from '@nestjs/graphql';
import { join } from 'path';
import { config } from 'dotenv';

config();

const definitionsFactory = new GraphQLDefinitionsFactory();
definitionsFactory.generate({
  typePaths: ['./src/**/*.graphql'],
  path: join(process.cwd(), 'src/graphql.ts'),
  outputAs: 'class',
  watch: process.env.DEV === 'true',
});
