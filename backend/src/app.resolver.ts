import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class AppResolver {
  @Query((returns) => Boolean)
  async healthCheck(): Promise<boolean> {
    return true;
  }
}
