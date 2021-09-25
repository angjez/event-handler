import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../../../prisma/prisma.service';
import { AddEventInput } from './add-event.input';
import { AddEventService } from './add-event.service';
import { EventSuccessfulAddedResponse } from './responses';

describe('AddEventService', () => {
  let addEventService: AddEventService;

  beforeEach(async () => {
    const event: TestingModule = await Test.createTestingModule({
      providers: [PrismaService, AddEventService],
    }).compile();
    addEventService = event.get<AddEventService>(AddEventService);
  });

  describe('addEvent', () => {
    it('should successfully add an event', async () => {
      const eventInput: AddEventInput = {
        name: 'Test',
        surname: 'User',
        email: 'test@user.test',
        date: new Date(),
      };
      const response = await addEventService.addEvent(eventInput);
      const eventSuccessfulAddedResponse = new EventSuccessfulAddedResponse();
      expect(response._typename).toBe(eventSuccessfulAddedResponse._typename);
    });
    it('should throw an error when incorrect input is provided', async () => {
      try {
        const eventInput: AddEventInput = {
          name: '',
          surname: '',
          email: 'test@user.',
          date: new Date(),
        };
        await addEventService.addEvent(eventInput);
      } catch (e) {
        expect(e).toBeInstanceOf(TypeError);
      }
    });
  });
});
