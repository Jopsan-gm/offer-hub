import { Resolver, Query } from '@nestjs/graphql';

@Resolver()
export class AppResolver {
  @Query(() => String)
  hello(): string {
    return 'Hello from OFFER-HUB GraphQL API!';
  }

  @Query(() => String)
  status(): string {
    return 'OFFER-HUB backend is up and running!';
  }
}
