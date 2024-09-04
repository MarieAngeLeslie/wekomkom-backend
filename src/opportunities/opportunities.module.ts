import { Module } from '@nestjs/common';
import { OpportunitiesController } from './opportunities.controller';
import { OpportunitiesService } from './opportunities.service';
import { PrismaClient } from '@prisma/client';

@Module({
    controllers: [OpportunitiesController],
    providers: [OpportunitiesService, PrismaClient],
})
export class OpportunitiesModule {

}
