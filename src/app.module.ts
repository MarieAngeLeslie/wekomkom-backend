import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OpportunitiesController } from './opportunities/opportunities.controller';
import { OpportunitiesService } from './opportunities/opportunities.service';
import { OpportunitiesModule } from './opportunities/opportunities.module';
import { ConfigModule } from '@nestjs/config';
import { PrismaClient } from '@prisma/client';

@Module({
  imports: [OpportunitiesModule, ConfigModule.forRoot()],
  controllers: [AppController, OpportunitiesController],
  providers: [AppService, OpportunitiesService, PrismaClient],
})
export class AppModule { }
