import { Inject } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AddEventInput } from './add-event.input';
import { AddEventService } from './add-event.service';
import { AddEventResponse } from './responses';

@Resolver()
export class AddEventResolver {
  constructor(
    @Inject(AddEventService) private readonly service: AddEventService,
  ) {}

  @Mutation(() => AddEventResponse)
  async addEvent(
    @Args('input') input: AddEventInput,
  ): Promise<typeof AddEventResponse> {
    return this.service.addEvent(input);
  }
}
