import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class AppResolver {
  @Query(() => Boolean)
  async healthCheck(): Promise<boolean> {
    return true;
  }
}
