import { Module } from '@nestjs/common';
import { AddEventResolver, AddEventService } from './actions/add-event';

const services = [AddEventService];
const resolvers = [AddEventResolver];

@Module({
  imports: [],
  providers: [...services, ...resolvers],
  exports: [],
})
export class EventModule {}
