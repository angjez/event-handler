import { createUnionType, Field, ObjectType } from '@nestjs/graphql';
import IBaseResponse from '../../../../shared/interfaces/base-response.interface';

@ObjectType()
export class EventSuccessfulAddedResponse implements IBaseResponse {
  readonly _typename: string = 'EventSuccessfulAddedResponse';

  @Field()
  readonly message: string = 'Event added.';
}

export const AddEventResponse = createUnionType({
  name: 'AddEventResponse',
  types: () => [EventSuccessfulAddedResponse],
});
