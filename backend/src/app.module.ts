import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppResolver } from './app.resolver';
import { GqlConfigService } from './config';
import { EventModule } from './modules';
import { PrismaModule } from './modules/prisma/prisma.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    GraphQLModule.forRootAsync({
      useClass: GqlConfigService,
    }),
    PrismaModule,
    EventModule,
  ],
  controllers: [AppController],
  providers: [AppResolver],
})
export class AppModule {}
