import { Injectable } from '@nestjs/common';
import { GqlModuleOptions, GqlOptionsFactory } from '@nestjs/graphql';
import { join } from 'path';

@Injectable()
export class GqlConfigService implements GqlOptionsFactory {
  createGqlOptions(): GqlModuleOptions {
    return {
      autoSchemaFile: join('src', 'graphql', 'schema.gql'),
      debug: true,
      introspection: true,
      context: ({ req }) => ({ headers: req.headers }),
      sortSchema: true,
    };
  }
}
