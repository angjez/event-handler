import { Inject, Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { AddEventInput } from './add-event.input';
import { EventSuccessfulAddedResponse } from './responses';

@Injectable()
export class AddEventService {
  constructor(
    @Inject(PrismaService) private readonly prismaService: PrismaService,
  ) {}

  async addEvent(input: AddEventInput): Promise<EventSuccessfulAddedResponse> {
    await this.prismaService.event.create({
      data: {
        name: input.name,
        surname: input.surname,
        email: input.email,
        date: input.date,
      },
    });

    return new EventSuccessfulAddedResponse();
  }
}
